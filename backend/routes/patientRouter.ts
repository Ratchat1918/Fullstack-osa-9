import experss from 'express'
import patientService from '../services/patientService'
import { toNewPatient } from '../utils/newPatient'
const router = experss.Router()

router.get('/',(_req,res)=>{
    res.send(patientService.getData())
})

router.post('/', (req, res) => {
    try{
        const newPatient = toNewPatient(req.body)
        const addedPatient = patientService.addPatient(newPatient)
        res.json(addedPatient)
    }catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
})

export default router;