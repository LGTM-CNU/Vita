from pygame import mixer
import time

# def load_file():
#     return AudioSegment.from_file('temp.wav')

def play_text(freq=22050, volume=1):
    playing = False

    if (playing):
        old_pos = mixer.music.get_pos()
        mixer.quit()

    mixer.init(frequency=freq)
    mixer.music.load('test.mp3')
    mixer.music.set_volume(volume)
    mixer.music.play()
    while mixer.music.get_busy():
        time.sleep(1)
    mixer.quit()

def play_voice(file_name = 'temp.mp3', freq=22050, volume=10):
    playing = False

    if (playing):
        old_pos = mixer.music.get_pos()
        mixer.quit()

    mixer.init(frequency=16000)
    mixer.music.load(file_name)
    mixer.music.set_volume(volume)
    mixer.music.play()
    while mixer.music.get_busy():
        time.sleep(1)
    mixer.quit()

def play_tts(file_name = 'temp.mp3', freq=22050, volume=1):
    playing = False

    if (playing):
        old_pos = mixer.music.get_pos()
        mixer.quit()

    mixer.init(frequency=freq)
    mixer.music.load(file_name)
    mixer.music.set_volume(volume)
    mixer.music.play()
    while mixer.music.get_busy():
        time.sleep(1)
    mixer.quit()

def play_alarm(freq=22050, volume=1):
    mixer.init(frequency=freq)
    mixer.music.load('test.mp3')
    mixer.music.set_volume(volume)
    mixer.music.play()
    while mixer.music.get_busy():
        time.sleep(1)
    mixer.quit()


def first_alarm(freq=22050, volume=1):
    mixer.init(frequency=freq)
    mixer.music.load('first_alarm.mp3')
    mixer.music.set_volume(volume)
    mixer.music.play()
    while mixer.music.get_busy():
        time.sleep(1)
    mixer.quit()

def second_alarm(freq=22050, volume=1):
    mixer.init(frequency=freq)
    mixer.music.load('second_alarm.mp3')
    mixer.music.set_volume(volume)
    mixer.music.play()
    while mixer.music.get_busy():
        time.sleep(1)
    mixer.quit()


def first_tts(freq=22050, volume=1):
    mixer.init(frequency=freq)
    mixer.music.load('first_tts.mp3')
    mixer.music.set_volume(volume)
    mixer.music.play()
    while mixer.music.get_busy():
        time.sleep(1)
    mixer.quit()


def second_tts(freq=22050, volume=1):
    mixer.init(frequency=freq)
    mixer.music.load('second_tts.mp3')
    mixer.music.set_volume(volume)
    mixer.music.play()
    while mixer.music.get_busy():
        time.sleep(1)
    mixer.quit()