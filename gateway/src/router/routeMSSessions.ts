import express from 'express';
import { getUserAuth, getUserRegister } from '../controllers/msSessions.controller';

const router = express.Router();

router.post('/sessions/login', getUserAuth);

router.post('/sessions/regtr', getUserRegister);

export { router as gatewaySessions };
