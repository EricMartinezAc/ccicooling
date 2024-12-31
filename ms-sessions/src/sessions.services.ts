import axios from 'axios';
import mongoose from 'mongoose';
import { RegisterUserOutputDTO } from './dto';

interface LoginProductResponse {
  _id: string;
  stat: boolean;
}
interface FindProductResponse {
  email: string;
  stat: boolean;
}

import users_schema from "./utils/users.schema";

export const RegtrSessionService = async (
  owner: string,
  clav_prodct: string,
  user: string,
  psw: string
): Promise<RegisterUserOutputDTO> => {
  try {

    const loginResponse = await axios.post<LoginProductResponse>(
      `${process.env.MSPRODUCTS_URI}loginProduct`,
      {
        owner,
        clav_prodct,
      }
    );

    const objectOwner = loginResponse.data;

    if (!objectOwner || !objectOwner.stat) {
      console.log(objectOwner);
      return { email: 'error, owner no found or unable', user: 'unknown' };
    }

    const objectUser = await users_schema
      .findOne({
        user,
        pswLogin: psw,
        id_prodct: objectOwner._id
      })
      .exec();

    if (objectUser) {
      console.error("Object user has been stored before");
      return { email: owner, user: objectUser.user };
    }


    const newUser = new users_schema({
      user,
      pswLogin: psw,
      id_product: objectOwner._id.toString(),
    });

    // Almacenar el nuevo usuario
    const objectNewUserSaved = await newUser.save();
    if (!objectNewUserSaved) {
      console.error("Object user was'nt stored");
      return { email: owner, user: `${objectNewUserSaved}` };
    }


    return { email: owner, user: objectNewUserSaved.user };
  } catch (error: any) {
    console.error("Error while processing session:", error.message);
    return { email: `${error.message}`, user: 'noFound' };
  }
};

export const AuthSessionService = async (
  _id: string,
  user: string,
  psw: string
): Promise<RegisterUserOutputDTO> => {
  try {

    const loginResponse = await axios.post<FindProductResponse>(
      `${process.env.MSPRODUCTS_URI}findProduct`,
      {
        _id
      }
    );

    const objectOwner = loginResponse.data;

    if (!objectOwner || !objectOwner.stat) {
      console.log(objectOwner);
      return { email: 'error, owner no found or unable', user: 'unknown' };
    }

    const objectUser = await users_schema
      .findOne({
        user,
        pswLogin: psw,
        id_prodct: new mongoose.Types.ObjectId(_id)
      })
      .exec();

    if (!objectUser) {
      console.error("Object user no found");
      return { email: `no found user`, user };
    }

    return { email:objectOwner.email, user: objectUser.user };
  } catch (error: any) {
    console.error("Error while processing session:", error.message);
    return { email: `${error.message}`, user: 'noFound' };
  }
};

