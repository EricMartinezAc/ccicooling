import axios from 'axios';
import { RegisterUserOutputDTO } from './dto';
import genereToken from './middlewares/token.generate';
import dotenv from "dotenv";
dotenv.config();


interface LoginProductResponse {
  id: string;
  stat: boolean;
  token: string;
}
interface FindProductResponse {
  email: string;
  stat: boolean;
  token: string | boolean
}

import users_schema from "./utils/users.schema";

export const RegtrSessionService = async (
  owner: string,
  clav_prodct: string,
  user: string,
  pswLogin: string
): Promise<RegisterUserOutputDTO> => {
  try {
    console.log(1, { owner, clav_prodct, user, pswLogin });


    const loginResponse = await axios.post<LoginProductResponse>(
      `${process.env.MSPRODUCTS_URI}loginProduct`,
      {
        owner,
        clav_prodct,
      }
    );

    const objectOwner = loginResponse.data;
    console.log(2, objectOwner)

    if (!objectOwner || !objectOwner.stat) {
      console.log(objectOwner);
      return { email: 'error, owner no found or unable', user: 'unknown', token: false };
    }

    const token = await genereToken(user, pswLogin)
    console.log(3, token)

    const objectUser = await users_schema
      .findOne({
        user,
        pswLogin,
        id_prodct: objectOwner.id
      })
      .exec();
    console.log(4, objectUser)

    if (objectUser) {
      await users_schema.findOneAndUpdate(
        {
          user,
          pswLogin: objectUser.pswLogin
        },
        { token });
      console.error("Object user has been stored before");
      return { email: owner, user: objectUser.user, token };
    }

    if (!token) {
      console.error("Object user was'nt stored");
      return { email: owner, user, token: false };
    }

    const newUser = new users_schema({
      user,
      pswLogin,
      id_prodct: objectOwner.id.toString(),
      token
    });

    // Almacenar el nuevo usuario
    const objectNewUserSaved = await newUser.save();
    if (!objectNewUserSaved) {
      console.error("Object user was'nt stored");
      return { email: owner, user: `${objectNewUserSaved}`, token: false };
    }


    return { email: owner, user: objectNewUserSaved.user, token };
  } catch (error: any) {
    console.error("Error while processing session:", error.message);
    return { email: `${error.message}`, user: 'noFound', token: false };
  }
};

export const AuthSessionService = async (
  _id: string,
  user: string,
  pswLogin: string
): Promise<RegisterUserOutputDTO> => {
  try {

    const loginResponse = await axios.post<FindProductResponse>(
      `${process.env.MSPRODUCTS_URI}findProduct`, { _id }
    );

    const objectOwner = loginResponse.data;

    if (!objectOwner || !objectOwner.stat) {
      console.log(objectOwner);
      return { email: 'error, owner no found or unable', user: 'unknown', token: false };
    }

    const objectUser = await users_schema
      .findOne({
        user,
        pswLogin,
        id_prodct: _id
      })
      .exec();

    if (!objectUser) {
      console.error("Object user no found");
      return { email: `no found user`, user, token: false };
    }

    const token = await genereToken(user, pswLogin)
    await users_schema.findOneAndUpdate(
      {
        user,
        pswLogin: objectUser.pswLogin
      },
      { token });

    return { email: objectOwner.email, user: objectUser.user, token: token };
  } catch (error: any) {
    console.error("Error while processing session:", error.message);
    return { email: `${error.message}`, user: 'noFound', token: false };
  }
};

