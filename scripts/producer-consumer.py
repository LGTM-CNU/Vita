import threading
value = 0


def plus():
    global value
    for i in range(1000000):
      value += 1

def minus():
    global value
    for i in range(1000000):
      value -= 1

producer_thread = threading.Thread(target=plus)
producer_thread.start()

consumer_thread = threading.Thread(target=minus)
consumer_thread.start()


print(value)