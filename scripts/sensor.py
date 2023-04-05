import RPi.GPIO as GPIO
import time
import threading
from shared.request import post_chatting
from shared.constant import USER_ID, EAT

lock = threading.Lock()

def start_sensor():
    global EAT
    GPIO.setmode(GPIO.BCM)
    GPIO_TRIGGER = 23
    GPIO_ECHO = 24
    print("start sensor")

    GPIO.setup(GPIO_TRIGGER, GPIO.OUT)
    GPIO.setup(GPIO_ECHO, GPIO.IN)

    try:
        while True:
            start_time = time.time()
            stop_time = time.time()
            GPIO.output(GPIO_TRIGGER, True)
            time.sleep(0.00001)
            GPIO.output(GPIO_TRIGGER, False)

            while GPIO.input(GPIO_ECHO) == 0:
                start_time = time.time()
            
            while GPIO.input(GPIO_ECHO) == 1:
                stop_time = time.time()
            
            time_elapsed = stop_time - start_time
            distance = round((time_elapsed * 34300) / 2, 2)
            print("Distance = ", distance, "cm")

            if distance > 50:
                post_chatting({
                    "userId": USER_ID,
                    "talker": "Vita",
                    "destination": "string",
                    "content": "string",
                    "isVoice": "string",
                    "medicineId": "string",
                    "alarmed": True,
                })
                with lock:
                    eat = True

            if eat:
                time.sleep(6)
                # time.sleep(600)
                with lock:
                    eat = False
            else:
                time.sleep(1)

    except KeyboardInterrupt:
        pass