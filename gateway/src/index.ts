import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

//import { gatewayCpannel } from './router/cpannel.route';
import { gatewaySessions } from './router/ms.session.router';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.GATEWAY_PORT || 2025;

app.use(
  cors({
    origin: "*"
  })
);
app.use(
  express.json({
    limit: "35mb"
  })
);

//app.use('/api', gatewayCpannel)
app.use('/api', gatewaySessions);

app.listen(port, () => {
  console.log(`Gateway running on ${port}`);
});
