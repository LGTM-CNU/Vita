from shared.constant import URL
from shared.request import get_medicines, post_chatting
import requests
import json
import os
from threading import Thread
from sensor import start_sensor
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

def main():
    
  medicines = get_medicines()

  for medicine in medicines:
    # midicine.time 이 존재하면
    pass
  
  # mp3 파일 플레이
  # 알림이 나와야 한다.

  # 시작했다는 채팅을 작성해야한다.

  
  # 초음파 도는 스레드

  t = Thread(target=start_sensor)
  t.start()



  # print(response.text)
  # response = requests.get(URL)

  # if response.status_code == 200:
  #     print(response.content)
  # else:
  #     print(f'Request failed with status code {response.status_code}')
    # alarms = get_alarms()

    # print(alarms)
if __name__ == '__main__':
    main()