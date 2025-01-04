import { Request, Response } from 'express';
import { AuthSessionService, RegtrSessionService } from './sessions.services';

export const RegtrSession = async (req: Request, res: Response) => {
  try {
    const { owner, clav_prodct, user, pswLogin } = req.body
    console.log('into ', { owner, clav_prodct, user, pswLogin });

    const message = await RegtrSessionService(owner, clav_prodct, user, pswLogin);
    console.log(`output RegtrSession ${message}`)
    res.json(message);
  } catch (error) {
    res.status(500).send(`error: ${error}`);
  }
};

export const AuthSession = async (req: Request, res: Response) => {
  try {
    const { id, user, pswLogin } = req.body
    console.log('into ', { id, user, pswLogin });

    const message = await AuthSessionService(id, user, pswLogin);
    console.log(`output AuthSession ${message}`)
    res.json(message);
  } catch (error) {
    res.status(500).send(`error: ${error}`);
  }
};
