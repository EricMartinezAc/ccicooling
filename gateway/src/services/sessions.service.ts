import axios from 'axios';

const BASE_URL = 'http://localhost:1992/';

export interface DataUserOutputDTO {
  data: Data
}
export interface Data {
  email: string;
  user: string
  token: string | boolean
}


export const userAuth = async (id: string, user: string, pswLogin: string) => {
  try {
    const response: DataUserOutputDTO = await axios.post(`${BASE_URL}`, {
      
        id,
        user,
        pswLogin
      ,
    });

    const { email, user, token } = response.data;

    // Extraccion de datos relevantes
    const resolve = {
      email,
      user,
      token
    };

    return resolve;
  } catch (error: any) {
    throw new Error(`Error consultando API de clima: ${error.message}`);
  }
};
export const userRegister = async (owner: string, clav_prodct: string, user: string, psw: string) => {
  try {
    const response: DataUserOutputDTO = await axios.get(`${BASE_URL}`, {
      params: {
        owner,
        clav_prodct,
        user,
        psw
      },
    });

    const { email, user, token } = response.data;

    // Extraccion de datos relevantes
    const resolve = {
      email,
      user,
      token
    };

    return resolve;
  } catch (error: any) {
    throw new Error(`Error consultando API de clima: ${error.message}`);
  }
};


