import express from 'express';
import { getGatewayData } from '../controllers/msproducts.controller.ts';

const router = express.Router();

router.get('/gateway', getGatewayData);

export { router as gatewayMSproducts };
