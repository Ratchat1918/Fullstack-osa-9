export interface Diagnosis{
  code: string;
  name:string;
  latin?:string;
}
export enum Gender {
  Male='male',
  Femlae='female',
  Other='other'
}
export interface Patients{
  id:string;
  name:string;
  dateOfBirth:string;
  ssn:string
  gender:Gender;
  occupation:string
}

export type newPatient = Omit<Patients, 'id'>;

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy',
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;