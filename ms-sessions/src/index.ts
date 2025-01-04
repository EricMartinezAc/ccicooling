import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import Conexiondb from "./utils/mongodb.connection";

import { sessionRoutes } from './sessions.router';

dotenv.config({ path: path.resolve(__dirname, '../.env') });
Conexiondb()

const app = express();
const port = process.env.MSSESSIONS_PORT;

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
app.use(
  express.json({
    limit: "35mb"
  })
);

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing gracefully');
  process.exit(0);
});


app.use('/api/ms-session', sessionRoutes);

app.listen(port, () => {
  console.log(`Session CRUD service running on ${port}`);
});
