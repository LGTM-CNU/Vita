import requests
from shared.constant import URL

def get_medicines(user_id = '1'):
    response = requests.get(URL + "/user/" + user_id + '/medicines')

    if response.status_code == 200:
        data = response.json()
        print(data)

        return data
    else:
        print(f'Request failed with status code {response.status_code}')

def post_chatting(data):
    response = requests.post(URL + "/chat", data)
    print(response.text)