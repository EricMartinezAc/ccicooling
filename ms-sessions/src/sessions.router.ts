import express from 'express';
import { RegtrSession, AuthSession } from './sessions.controller';

const router = express.Router();

router.post('/regtrSession', RegtrSession);
router.post('/authSession', AuthSession);

export { router as sessionRoutes };
