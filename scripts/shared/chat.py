from shared.request import get_chatting, patch_chatting
from shared.tts import say
from time import sleep
from shared.constant import USER_ID
from shared.firebase import download_firebase
from shared.play import play_tts


def start_chat():
  while True:
    chatting = get_chatting(USER_ID)
    # print(chatting)
    for chat in chatting:
      if not chat['isVoice'] or chat['alarmed']: 
        continue

      if ('firebasestorage' in chat['isVoice']):
        print('download 실행!')
        download_firebase(chat['isVoice'])
        play_tts('temp.wav')
        patch_chatting(chat['id'])
        
      else:
        say(chat['content'])

    sleep(60)