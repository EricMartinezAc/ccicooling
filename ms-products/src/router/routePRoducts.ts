import express from 'express';
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export { router as productRoutes };
