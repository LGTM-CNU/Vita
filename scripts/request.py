import requests
import os
from playsound import playsound

# 'https://google.com'
# 'http://3.36.94.214:4000/'
USER_NUMBER = 1
약을먹어야할때나오는소리 = os.path.join('scripts/test.mp3')

playsound('scripts/test.wav', block=False)            

# response = requests.get(URL)

# if response.status_code == 200:
#     print(response.content)
# else:
#     print(f'Request failed with status code {response.status_code}')


# def get_alarms():
#     requests.get(URL + "/alarms")

#     if response.status_code == 200:
#         data = response.json()
#         print(data)

#         return data
#     else:
#         print(f'Request failed with status code {response.status_code}')


# alarms = get_alarms()


# if len(alarms) > 0:
#     # 알람이 존재하고 현재 시간에 줘야하는 알람이 있다면?

#     for alarm in alarms:
#         for t in alarm.time:
#             # 여기서 t랑 현재 몇시 몇분인지가 일치한다면?
#             playsound(약을먹어야할때나오는소리)            
#             pass
      
