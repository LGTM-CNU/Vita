from gtts import gTTS
from shared.play import play_tts

def say(text, volume=10):
    gtts_say(text, volume)

def gtts_say(text, volume):
    gtts = gTTS(text=text, lang='ko')
    gtts.save('temp.mp3')
    
    play_tts(24000, volume)