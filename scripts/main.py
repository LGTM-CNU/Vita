from shared.constant import USER_ID, EAT
from shared.request import get_medicines
from shared.play import  play_alarm
from shared.time import get_current_time_str

import threading
from sensor import start_sensor
from time import sleep

lock = threading.Lock()

def main():
  thread = threading.Thread(target=start_sensor)
  thread.start()
  
  while True:
    medicines = get_medicines(USER_ID)
    current_time_str = get_current_time_str()
    # print(medicines)
    for medicine in medicines:
      if medicine['time']:
        for t in medicine['time']:
          if t == current_time_str:
            # 약을 먹을 시간이라면 울리는 알림
            play_alarm(24000, 1)
            # 10분대기
            while True:
              # 안먹었으면 대기
              sleep(6)
              # sleep(600)
              if EAT:
                break
              else:
                play_alarm(24000, 1)       
    # 항상 안먹은 상태로 초기화      
    with lock:
      EAT = False
    sleep(5)
    
if __name__ == '__main__':
    main()

  
      

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
