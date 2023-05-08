import threading

mutex = threading.Lock()
value = 0

def plus():
    global value
    for i in range(1000000):
      mutex.acquire()
      value += 1
      mutex.release()

def minus():
    global value
    for i in range(1000000):
      mutex.acquire()
      value -= 1
      mutex.release()

producer_thread = threading.Thread(target=plus)
producer_thread.start()

consumer_thread = threading.Thread(target=minus)
consumer_thread.start()

producer_thread.join()
consumer_thread.join()

print(value)

# mutex를 활용해서 공유자원에 대한 접근을 제어한다.
# 스레드 간의 안정성을 보장한다.