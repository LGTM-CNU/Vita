from shared.constant import URL, USER_ID
from shared.request import get_medicines, post_chatting
from shared.play import  play_alarm, play_text
from shared.time import get_current_time_str

import requests
import json
import os
from multiprocessing import Process
# from sensor import start_sensor
import datetime 
from time import sleep
import sys

from pygame import mixer

# def play_text(freq, volume):
#     playing = False

#     if (playing):
#         old_pos = mixer.music.get_pos()
#         mixer.quit()

#     mixer.init(frequency=freq)
#     mixer.music.load('test.wav')
#     mixer.music.set_volume(volume)
#     mixer.music.play()
#     while mixer.music.get_busy():
#         sleep(1)
#     mixer.quit()

def main():
  # p = Process(target=start_sensor)
  # p.start()

  while True:
    medicines = get_medicines(USER_ID)
    current_time_str = get_current_time_str()
    # sleep(10)
    sleep(5)

    print(medicines)
    for medicine in medicines:
      if medicine['time']:
        for t in medicine['time']:
          print(t, "?@#")
          if t == current_time_str:
            print("!!")
            break
    
    # play_alarm()
    play_alarm(24000, 1)
      

  # medicines = [{'time' : ["11:00", "20:34", "20:35", "20:36", "20:37", "20:38", "12:48", "12:50"]}, {'time': ["12:00","20:47","20:48"]}]

  # print(current_time_str)
  # for medicine in medicines:
  #   # print(medicine)
  #   print(medicine['time'])
  #   # print(medicine[time])
  #   # midicine.time의 배열 루프에서 현재 시각이랑 같은 시각이 있다면
  #   # 약을 먹으라고 play
  #   if medicine['time']:
  #     for t in medicine['time']:
  #       print(t, current_time_str)
  #       if t == current_time_str:
  #         RUN_SENSOR = True
  #         break
    
  # for medicine in medicines:
  #   # midicine.time의 배열 루프에서 현재 시각이랑 같은 시각이 있다면
  #   # 약을 먹으라고 play
  #   for t in medicine.time:
  #      if t == time_str:
          
  #       RUN_SENSOR = True

  # play_text(24000, 1)
  # print("play !!")
  # play_text(24000, 1)
  # print("play !!")
  # print("play !!", RUN_SENSOR)

  # if RUN_SENSOR:
  #    # 초음파 센서를 시작한다.
  #   t = Process(target=start_sensor)
  #   t.start()

  #   sleep(600) # 10분 대기
  #   t.join() # 스레드 종료 시키고

  #   # 다시 먹어야한다고 알려줘야함

  #   # 그러면서 다시 스레드 돌기
  #   t = Thread(target=start_sensor)
  #   t.start()

  #   print(123)
  #   sleep(6000)
  #   print(456)

    # 또 안먹었으면 물어본다. 
    # speech to text -> API로 DB에 기록

    # sys.exit(0)

  # else:
     # 애초에 초음파 센서를 킬 필요가 없다면 스크립트를 종료한다.
    #  exit(0)




if __name__ == '__main__':
    main()



# pygame.mixer.init()
# pygame.mixer.music.load('test.wav')
# pygame.mixer.music.play()
# from pygame import mixer
# from playsound import playsound

# 같은 경로에 있는 test.mp3 플레이
# print()
# playsound(os.getcwd() + '/scripts/test.mp3')

# mixer.init()
# mixer.music.load('scripts/test.mp3')
# mixer.music.play()



  # print(response.text)
  # response = requests.get(URL)

  # if response.status_code == 200:
  #     print(response.content)
  # else:
  #     print(f'Request failed with status code {response.status_code}')
    # alarms = get_alarms()

    # print(alarms)
