import { Request, Response } from 'express';
import { AuthSessionService, RegtrSessionService } from './sessions.services';

export const RegtrSession = async (req: Request, res: Response) => {
  try {
    const { owner, clav_prodct, user, psw } = req.body

    console.log(`into RegtrSession ${owner}, ${clav_prodct}, ${user}, ${psw}`)
    const message = await RegtrSessionService(owner, clav_prodct, user, psw);
    console.log(`output RegtrSession ${message}`)
    res.json({ message });
  } catch (error) {
    res.status(500).send(`error: ${error}`);
  }
};

export const AuthSession = async (req: Request, res: Response) => {
  try {
    const { _id, user, psw } = req.body

    console.log(`into AuthSession ${user}, ${psw}`)
    const message = await AuthSessionService(_id, user, psw);
    console.log(`output AuthSession ${message}`)
    res.json({ message });
  } catch (error) {
    res.status(500).send(`error: ${error}`);
  }
};
