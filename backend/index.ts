import express from 'express';
import dataRouter from './routes/diagnosesRouter'
import patientRouter from './routes/patientRouter'
import diariesRouter from './routes/diariesRouter'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())
const PORT = 3001;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses',dataRouter)
app.use('/api/patients',patientRouter)
app.use('/api/diaries',diariesRouter)

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/ping`);
});
