import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage
import requests

def init_firebase():
  # Firebase 프로젝트의 서비스 계정 키 파일 경로를 사용하여 인증 정보를 설정합니다.
  cred = credentials.Certificate("cloud_speech.json")

  # Firebase 앱을 초기화합니다.
  firebase_admin.initialize_app(cred, {
      'storageBucket': 'gs://vita-b53db.appspot.com/'
  })

def download_firebase(url):
  

  # 다운로드할 파일의 이름을 지정합니다.
  file_name = "temp.wav"

  # 파일을 다운로드합니다.
  response = requests.get(url)
  with open(file_name, 'wb') as f:
      f.write(response.content)

  print(f"File downloaded successfully as {file_name}")
