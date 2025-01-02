import express, { NextFunction, Request, Response } from 'express';
import { getUserAuth, getUserRegister } from '../controllers/msSessions.controller';
import ValideInputSession from '../middlewares/valideInputsSession';

const router = express.Router();

router.post('/sessions/login',
    async (req: Request, res: Response, next: NextFunction) => {
        const { user, pswLogin }: any | undefined = req.body
        if (!pswLogin) { throw new Error("unknow"); }
        await ValideInputSession({ user, pswLogin }) ?
            next() :
            res.json({ email: 'unknow', user: `unknow`, token: 'false' })
    }, getUserAuth);

router.post('/sessions/regtr',
    async (req: Request, res: Response, next: NextFunction) => {
        const { user, pswLogin }: any | undefined = req.body
        if (!pswLogin) { throw new Error("unknow"); }
        await ValideInputSession({ user, pswLogin }) ?
            next() :
            res.json({ email: 'unknow', user: `unknow`, token: 'false' })
    }, getUserRegister);

export { router as gatewaySessions };
