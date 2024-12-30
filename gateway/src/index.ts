import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

import { gatewayCpannel } from './router/routeCpannel';
import { gatewaySessions } from './router/routeMSSessions';
// import { gatewayMSproducts } from './router/routeMSproducts';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.GATEWAY_PORT || 3006;

app.use(cors());
app.use(express.json());

app.use('/api', gatewayCpannel)
app.use('/api', gatewaySessions);
// app.use('/api', gatewayMSproducts);

app.listen(port, () => {
  console.log(`Gateway running on http://localhost:${port}`);
});
