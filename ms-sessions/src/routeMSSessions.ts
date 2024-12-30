import express from 'express';
import { AuthSession, RegtrSession } from './msSessions.controller';

const router = express.Router();

router.get('/regtrSession', RegtrSession);
router.get('/authSession', AuthSession);

export { router as msSessions };
