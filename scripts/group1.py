from shared.constant import USER_ID, EAT
from shared.request import get_medicines
from shared.play import  play_alarm, first_alarm, second_alarm
from shared.time import get_current_time_str
from shared.speechToText import listen
from shared.request import post_chatting, push_message
from shared.chat import start_chat
from shared.firebase import init_firebase
import datetime
import os

import RPi.GPIO as GPIO
import time
import threading
import json
from time import sleep

lock = threading.Lock()



def print_to_file(data):
    today = datetime.date.today()
    filename = f"{today.strftime('%Y-%m-%d')}.txt"
    now = datetime.datetime.now()
    timestamp = now.strftime("%Y-%m-%d %H:%M:%S")


    if os.path.exists(filename):
        with open(filename, "a") as file:
            file.write(timestamp + data + "\n")
    else:
        with open(filename, "w") as file:
            file.write(timestamp + data + "\n")


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
            if distance > 10 and EAT == False:
                with lock:
                    EAT = True

                print_to_file("거리: " + distance + "cm")




            # 5초에 한번 체크
            time.sleep(5)

    except KeyboardInterrupt:
        pass

def main():
    global EAT

    sensor_thread = threading.Thread(target=start_sensor)
    sensor_thread.start()

    while True:
        with lock:
          EAT = False
        # 10분에 한번만 체크 가능한 상태로 만들기
        sleep(600)
        
    

    return



if __name__ == '__main__':
    main()
