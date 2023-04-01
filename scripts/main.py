from shared.constant import URL
from shared.request import get_medicines
import requests
import json

def main():
    
  medicines = get_medicines()
  print(medicines)
  # print(type(medicines))
  # print(URL,"?")
  
  
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