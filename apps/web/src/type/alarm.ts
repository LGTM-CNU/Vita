export interface Medicine {
  id: string;
  type: string;
  description?: string;
  thumbnail: string;
  morning?: string;
  evening?: string;
  afternoon?: string;
  ownerId: string;
  repeat: number;
}
