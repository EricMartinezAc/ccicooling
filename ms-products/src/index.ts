import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import Conexiondb from "./utils/mongodb.connection";


import { productRoutes } from './products.router';

dotenv.config({ path: path.resolve(__dirname, '../.env') });
Conexiondb()


const app = express();
const port = process.env.MSPRODUCTS_PORT;

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

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing gracefully');
  process.exit(0);
});


app.listen(port, () => {
  console.log(`Product CRUD Service running on ${port}`);
});



