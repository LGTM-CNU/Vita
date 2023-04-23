from pygame import mixer
import time

def play_text(freq=24000, volume=1):
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

def play_tts(file_name = 'temp.mp3', freq=24000, volume=1):
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



def play_alarm(freq=24000, volume=1):
    mixer.init(frequency=freq)
    mixer.music.load('test.mp3')
    mixer.music.set_volume(volume)
    mixer.music.play()
    while mixer.music.get_busy():
        time.sleep(1)
    mixer.quit()