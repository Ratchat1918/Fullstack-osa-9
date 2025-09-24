import { newPatient, Gender } from "../types";
import { v1 as uuid } from 'uuid'
const id = uuid()

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
}
const parseName = (name:unknown): string=>{
    if(!name || !isString(name)){
        throw new Error('Incorrect or missing name' + name);
    }
    return name;
}
const parseSsn = (ssn:unknown): string=>{
    if(!ssn || !isString(ssn)){
        throw new Error('Incorrect or missing ssn' + ssn);
    }
    return ssn;
}
const parseOccupation = (occupation:unknown): string=>{
    if(!occupation || !isString(occupation)){
        throw new Error('Incorrect or missing occupation' + occupation);
    }
    return occupation;
}
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
      throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};
const isGender = (param: string): param is Gender => {
  return ['male', 'female', 'other'].includes(param)
};
const parseGender = (gender: unknown):Gender=>{
    if(!gender || !isString(gender) || !isGender(gender)){
        throw new Error('Incorrect or missing gender:   '+gender)
    }else{
        return gender
    }
}

export const toNewPatient = (object:unknown):newPatient=>{
    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
    }
    if('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object){
        const newPatient = {
        id:id,
        name:parseName(object.name),
        dateOfBirth:parseDate(object.dateOfBirth),
        ssn:parseSsn(object.ssn),
        gender:parseGender(object.gender),
        occupation:parseOccupation(object.occupation),
    }
    return newPatient
}
    throw new Error('Incorrect data: some fields are missing');
};