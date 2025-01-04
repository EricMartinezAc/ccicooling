import { Request, Response } from 'express';
import { IntoUserAuthDTO } from '../dto/into.user.auth.dto';
import { IntoUserRegtrDTO } from '../dto/into.user.regtr.dto';
import { OutPutUserSessionDTO } from '../dto/output.user.session.dto';
import { userAuth, userRegister } from '../services/sessions.service';

export interface DataUserOutputDTO {
  data: OutPutUserSessionDTO;
}

export const getUserAuth = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, user, pswLogin }:IntoUserAuthDTO = req.body;
    console.log('into gateway',{ id, user, pswLogin })
    let userAuthSuccess: OutPutUserSessionDTO = { statusCode: 404, email: 'unknow 1.5', user: `unknow 1.5`, token: false }

    if (!user || !pswLogin) {
      res.json(userAuthSuccess)
    }

    userAuthSuccess = await userAuth(id, user, pswLogin);
    res.json(userAuthSuccess)
  } catch (error: any) {
    res.json({ email: '500', user: `unknow 1.2`, token: `${error}` })
  }
};

export const getUserRegister = async (req: Request, res: Response): Promise<void> => {
  try {   
    const { owner, clav_prodct, user, pswLogin }: IntoUserRegtrDTO = req.body;
    console.log('into gateway', { owner, clav_prodct, user, pswLogin });
    
    let userRegisterSuccess: OutPutUserSessionDTO = { statusCode: 404, email: 'unknow 2.1', user: `unknow 2.1`, token: false }
    if (!owner || !clav_prodct || !user || !pswLogin) {
      res.json(userRegisterSuccess)
    }

    userRegisterSuccess = await userRegister(owner, clav_prodct, user, pswLogin);
    res.json(userRegisterSuccess);


  } catch (error: any) {
    res.json({ statusCode: 500, email: 'unknow 2.2', user: `unknow 2.2`, token: `${error}` })
  }
};

