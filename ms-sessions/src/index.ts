import express from 'express';
import { serviceMS250 } from './routes';

const app = express();
const port = 3001;

app.use(express.json());
app.use('/api', serviceMS250);

app.listen(port, () => {
  console.log(`Service 1 running on http://localhost:${port}`);
});
