import { Request, Response } from 'express';
import { userAuth, userRegister } from '../services/sessions.service';

export interface RegisterUserOutputDTO{
  email: string;
  user: string
  token: string | boolean
}



export const getUserAuth = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, user, psw } = req.body;

    if (!user || !psw) {
      res.status(400).json({ error: 'datos insuficientes.' });
      return;
    }

    const userAuthSuccess:RegisterUserOutputDTO = await userAuth(id, user, psw);
    res.json({
      data: userAuthSuccess,
    });


  } catch (error: any) {
    res.status(500).json({ error: `Error en operacion: ${error.message}` });
  }
};

export const getUserRegister = async (req: Request, res: Response): Promise<void> => {
  try {
    const { owner, clav_prodct, user, psw } = req.body;

    if (!owner || !clav_prodct || !user || !psw) {
      res.status(400).json({ error: 'datos insuficientes.' });
      return;
    }

    const userRegisterSuccess: RegisterUserOutputDTO = await userRegister(owner, clav_prodct, user, psw);
    res.json({
      data: userRegisterSuccess,
    });


  } catch (error: any) {
    res.status(500).json({ error: `Error en operacion: ${error.message}` });
  }
};

