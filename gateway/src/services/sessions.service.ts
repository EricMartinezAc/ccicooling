import axios from 'axios';
import { OutPutUserSessionDTO } from '../dto/output.user.session.dto';
import dotenv from "dotenv";
dotenv.config();


export const userAuth = async (id: string, userIn: string, pswLogin: string): Promise<OutPutUserSessionDTO> => {
  try {
    console.log(`${process.env.MSSESSIONS_URI}authSession`, { id, userIn, pswLogin })
    const response = await axios.post(`${process.env.MSSESSIONS_URI}authSession`, {
      id,
      user: userIn,
      pswLogin,
    });

    const { email, user, token } = response.data;

    const resolve: OutPutUserSessionDTO = {
      statusCode: token ? 200 : 503,
      email,
      user,
      token,
    };
    console.log(resolve);

    return resolve;
  } catch (error: any) {
    throw new Error(`Error consultando API : ${error.message}`);
  }
};

export const userRegister = async (
  owner: string,
  clav_prodct: string,
  userIn: string,
  pswLogin: string
): Promise<OutPutUserSessionDTO> => {
  try {
    console.log('in regtr 2', { owner, clav_prodct, userIn, pswLogin })
    const response = await axios.post(`${process.env.MSSESSIONS_URI}regtrSession`,
      {
        owner,
        clav_prodct,
        user: userIn,
        pswLogin,
      },
    );

    const { user, token } = response.data;


    const resolve = {
      statusCode: token ? 200 : 503,
      email: owner,
      user,
      token,
    };

    return resolve;
  } catch (error: any) {
    throw new Error(`Error consultando API : ${error.message}`);
  }
};
