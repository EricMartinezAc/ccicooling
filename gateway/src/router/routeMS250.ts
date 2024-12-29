import express from 'express';
import { getGatewayData } from '../controllers/ms250.controller';

const router = express.Router();

router.get('/gateway', getGatewayData);

export { router as gatewayMS250 };
