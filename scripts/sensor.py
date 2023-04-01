import RPi.GPIO as GPIO
import time
from shared.request import post_chatting
from shared.constant import USER_ID


def start_sensor():
    GPIO.setmode(GPIO.BCM)
    GPIO_TRIGGER = 23
    GPIO_ECHO = 24
    print("start")

    GPIO.setup(GPIO_TRIGGER, GPIO.OUT)
    GPIO.setup(GPIO_ECHO, GPIO.IN)
    # start_time = time.time()  # 현재 시간을 초단위로 얻어옵니다.
    # end_time = start_time + (10 * 60)  # 10분 후의 시간을 계산합니다.

    try:
        while True:
            # current_time = time.time()  # 현재 시간을 초단위로 얻어옵니다.
            # remaining_time = int(end_time - current_time)  # 남은 시간을 초단위로 계산합니다.

            # if remaining_time <= 0:
            #     print("")
            #     break

            StartTime = time.time()
            StopTime = time.time()
            GPIO.output(GPIO_TRIGGER, True)
            time.sleep(0.00001)
            GPIO.output(GPIO_TRIGGER, False)

            while GPIO.input(GPIO_ECHO) == 0:
                StartTime = time.time()
            
            while GPIO.input(GPIO_ECHO) == 1:
                StopTime = time.time()
            
            TimeElapsed = StopTime - StartTime
            distance = round((TimeElapsed * 34300) / 2, 2)
            print("Distance = ", distance, "cm")

            if distance > 20:
                # 거리가 멀어진다면 ? request를 보내야 한다.
                post_chatting({
                    "userId": USER_ID,
                    "talker": "string",
                    "destination": "string",
                    "content": "string",
                    "isVoice": "string",
                    "medicineId": "string",
                    "alarmed": True,
                })

                # 들으면 그 순간 음성을 플레이 음성을 플레이하는 코드를 이 아래에 삽입

            time.sleep(1)

    except KeyboardInterrupt:
        pass