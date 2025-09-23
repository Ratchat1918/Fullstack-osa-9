import express from 'express';
import calculateBmi from './bmiCalculator';
import { calculator, Operation } from './calculator';
import { calculateExercises } from './exerciseCalculator';
//const express = require('express');
const app = express();

app.use(express.json());

app.post('/calculate', (req, res) => {
  const { value1, value2, op } = req.body;
  const result = calculator(
    Number(value1), Number(value2), op as Operation
  );
  res.send({ result });
});

app.post('/exercises', (req, res) => {
  const { daily_exercises, target} = req.body;
  const result = calculateExercises({
    hours: daily_exercises.map(Number),
    setTarget: Number(target)
  });
  
  res.send({ result });
});

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Fullstack');
});

app.get('/bmi', (_req, res) => {
  const height = Number(_req.query.height);
  const weight = Number(_req.query.weight);
  res.send(calculateBmi(height,weight));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port  http://localhost:${PORT}`);
});