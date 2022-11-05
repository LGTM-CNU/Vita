interface Alarm {
  morning?: string;
  evening?: string;
  afternoon?: string;
}

export interface Medicine {
  id: string;
  type: string;
  description?: string;
  thumbnail: string;
  alarm: Alarm;
}
