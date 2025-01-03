import express from 'express';
import { loginProduct, findProduct } from './products.controller';

const router = express.Router();

router.post('/loginProduct', loginProduct);
router.post('/findProduct', findProduct);
// router.post('/createProduct', createProduct);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);

router.get('/getProductInfo', (req, res) => {
    const productInfo = {
        owner: 'arcontroller@climatecontrolsing.com',
        clav_prodct: 'Arc2025*'
    };

    res.json(productInfo);
});

export { router as productRoutes };
