import express from 'express';
import { getMS250Data } from './controllers';

const router = express.Router();

router.get('/ms250', getMS250Data);

export { router as serviceMS250 };
