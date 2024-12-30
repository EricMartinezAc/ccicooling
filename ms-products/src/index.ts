import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import Conexiondb from "./utils/producs.connection";


import { productRoutes } from './products.router';

dotenv.config({ path: path.resolve(__dirname, '../.env') });
Conexiondb()

const app = express();
const port = process.env.PORT || 1991;

app.use(
  cors({
    origin: "*",
  })
);
app.use(
  express.json({
    limit: "35mb",
  })
);
app.use('/api/ms/products', productRoutes);

app.listen(port, () => {
  console.log(`Product CRUD Service running on http://localhost:${port}`);
});



