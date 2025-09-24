import patientData from "../data/patients";
import { Patients,newPatient} from "../types";
import { v1 as uuid } from 'uuid'

const getData=():Patients[]=>{
    return patientData
}

const addPatient=(entry:newPatient):Patients =>{
    const newPatient = {
        id:uuid(),
        ...entry
    }
    patientData.push(newPatient)
    return newPatient
}
export default{
    getData,
    addPatient
}
