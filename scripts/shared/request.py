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
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    response = requests.post(URL + "/chat", data=data, headers=headers)
    print(response.text)


def get_chatting(user_id):
    response = requests.get(URL + "/chat")

    if response.status_code == 200:
        data = response.json()

        return data

    else:
        print(f'Request failed with status code {response.status_code}')

def patch_chatting(chat_id):
    requests.patch(URL + "/chat/" + str(chat_id))
    return