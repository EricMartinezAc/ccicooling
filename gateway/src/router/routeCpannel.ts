import express from 'express';
import { getDataServiceCpannel } from '../controllers/cpannel.controller';

const router = express.Router();

router.post('/cpannel', getDataServiceCpannel);

export { router as gatewayCpannel };
