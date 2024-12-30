import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

import { msSessions } from './routeMSSessions';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.GATEWAY_PORT || 1992;

app.use(cors());
app.use(express.json());

app.use('/api/ms-session', msSessions);

app.listen(port, () => {
  console.log(`Gateway running on http://localhost:${port}`);
});
