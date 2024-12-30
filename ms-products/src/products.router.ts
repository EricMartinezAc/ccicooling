import express from 'express';
import { loginProduct, getProduct } from './products.controller';

const router = express.Router();

router.post('/loginProduct', loginProduct);
router.get('/:id', getProduct);
// router.post('/createProduct', createProduct);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);

export { router as productRoutes };
