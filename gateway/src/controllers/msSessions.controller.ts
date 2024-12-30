import { Request, Response } from 'express';
import { userAuth, userRegister } from '../services/sessions.service';

export const getUserAuth = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, cel, user, psw } = req.body;

    if (!user || !psw) {
      res.status(400).json({ error: 'datos insuficientes.' });
      return;
    }

    const userAuthSuccess = await userAuth(user, psw);
    res.json({
      data: userAuthSuccess,
    });


  } catch (error: any) {
    res.status(500).json({ error: `Error en operacion: ${error.message}` });
  }
};

export const getUserRegister = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, user, psw } = req.body;

    if (!user || !psw) {
      res.status(400).json({ error: 'datos insuficientes.' });
      return;
    }

    const userRegisterSuccess = await userRegister(email, user, psw);
    res.json({
      data: userRegisterSuccess,
    });


  } catch (error: any) {
    res.status(500).json({ error: `Error en operacion: ${error.message}` });
  }
};

