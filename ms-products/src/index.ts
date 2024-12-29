import express from 'express';
import { productRoutes } from './router/routePRoducts';

const app = express();
const port = process.env.PORT || 1991;

app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Product CRUD Service running on http://localhost:${port}`);
});
