import { Request, Response } from 'express';
import { AuthSessionService, RegtrSessionService } from './msSessions.services';

export const RegtrSession = async (req: Request, res: Response) => {
  try {
    const { email, user, psw } = req.body

    const message = await RegtrSessionService(email, user, psw);
    res.json({ message });
  } catch (error) {
    res.status(500).send(`error: ${error}`);
  }
};

export const AuthSession = async (req: Request, res: Response) => {
  try {
    const { user, psw } = req.body

    const message = await AuthSessionService(user, psw);
    res.json({ message });
  } catch (error) {
    res.status(500).send(`error: ${error}`);
  }
};
