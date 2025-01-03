import express, { NextFunction, Request, Response } from 'express';
import { getUserAuth, getUserRegister } from '../controllers/msSessions.controller';
import ValideInputSession from '../middlewares/valideInputsSession';

const router = express.Router();

router.post('/sessions/login',
    async (req: Request, res: Response, next: NextFunction):Promise<void> => {
        await ValideInputSession(req.body) ?
            next() :
            res.json({ statusCode: 500 ,email: 'unknow email 1', user: `unknow user 1`, token: false })
    }, getUserAuth);


    
router.post('/sessions/regtr',
    async (req: Request, res: Response, next: NextFunction):Promise<void> => {
        await ValideInputSession(req.body) ?
            next() :
            res.json({ statusCode: 500 ,email: 'unknow email 2', user: `unknow user 2`, token: false })
        }, getUserRegister);

export { router as gatewaySessions };
