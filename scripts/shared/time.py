
import datetime 

def get_current_time_str():
  now = datetime.datetime.now()
  current_time_str = now.strftime('%H:%M')
  return current_time_str