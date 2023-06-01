from gtts import gTTS
from shared.play import play_tts

def say(text, volume=10):
    gtts_say(text, volume)

def gtts_say(text, volume):
    gtts = gTTS(text=text, lang='ko')
    gtts.save('second_tts.mp3')

    play_tts('second_tts.mp3', 24000, volume)

say("기록되었습니다.",10)
