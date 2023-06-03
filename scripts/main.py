from shared.constant import USER_ID, EAT
from shared.request import get_medicines
from shared.play import  play_alarm, first_alarm, second_alarm, first_tts, second_tts
from shared.time import get_current_time_str
from shared.speechToText import listen
from shared.request import post_chatting, push_message
from shared.chat import start_chat
from shared.firebase import init_firebase

import RPi.GPIO as GPIO
import time
import threading
import json
from time import sleep

lock = threading.Lock()

def start_sensor():
    global EAT
    GPIO.setmode(GPIO.BCM)
    GPIO_TRIGGER = 23
    GPIO_ECHO = 24
    print("start sensor")

    GPIO.setup(GPIO_TRIGGER, GPIO.OUT)
    GPIO.setup(GPIO_ECHO, GPIO.IN)

    try:
        while True:
            start_time = time.time()
            stop_time = time.time()
            GPIO.output(GPIO_TRIGGER, True)
            time.sleep(0.00001)
            GPIO.output(GPIO_TRIGGER, False)

            while GPIO.input(GPIO_ECHO) == 0:
                start_time = time.time()
            
            while GPIO.input(GPIO_ECHO) == 1:
                stop_time = time.time()
            
            time_elapsed = stop_time - start_time
            distance = round((time_elapsed * 34300) / 2, 2)
            print("Distance = ", distance, "cm")
            print(EAT, distance)
            if distance > 10:
                with lock:
                    EAT = True
            time.sleep(1)

    except KeyboardInterrupt:
        pass


def main():
  global EAT
  init_firebase()

  sensor_thread = threading.Thread(target=start_sensor)
  sensor_thread.start()
  chat_thread = threading.Thread(target=start_chat)
  chat_thread.start()

  while True:
    medicines = get_medicines(USER_ID)
    current_time_str = get_current_time_str()
    for medicine in medicines:
      if medicine['time']:
        for t in medicine['time']:
          h1,m1 = map(int, t.split(":"))
          h2,m2 = map(int, current_time_str.split(':'))
          if h1 == h2 and m1 ==m2:
            first_alarm(24000, 1)
            sleep(300)
            print(EAT)

            if EAT:
              print('먹음')

              post_chatting(json.dumps(
                {
                  "talker": "vita",
                  "destination": USER_ID,
                  "content": current_time_str + "에 약을 먹었습니다." ,
                  "isVoice": "",
                  "medicineId": medicine['id'],
                  "alarmed": True,
                  "userId": USER_ID
                }
              ))

              break

            second_alarm(24000, 1)
            sleep(300)

            if EAT:
              post_chatting(json.dumps(
                {
                  "talker": "vita",
                  "destination": USER_ID,
                  "content": current_time_str + "에 약을 먹었습니다." ,
                  "isVoice": "",
                  "medicineId": medicine['id'],
                  "alarmed": True,
                  "userId": USER_ID
                }
              ))
            else:
              push_message(USER_ID)
              first_tts(24000, 1)
 
              if_not_eat_reason_str = listen()
              
              second_tts(24000, 1)
              post_chatting(json.dumps(
                {
                  "talker": USER_ID,
                  "destination": "vita",
                  "content": if_not_eat_reason_str,
                  "isVoice": "",
                  "medicineId": medicine['id'],
                  "alarmed": True,
                  "userId": USER_ID
                }
              ))
    with lock:
      EAT = False
    sleep(5)

    
if __name__ == '__main__':
    main()
