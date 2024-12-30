import db from "./utils/PLSQL/dbConnection";
import bcrypt from "bcrypt";
//import oracledb from "oracledb";
import { RegisterUserOutBinds, AuthUserOutBinds } from "./dto";

export const RegtrSessionService = async (email: string, user: string, password: string) => {
  const connection = await db();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
        //Encuentre el producto:
        console.log("buscando .. ", [datos.owner]);
        const DB = await prodct_schema
          .findOne({
            owner: datos.owner,
            stat: true,
          })
          .exec();
        console.log(1, [DB, datos.pswLogin]);
        //Encuentre usuario:
        if (DB !== null) {
          const userFound = await users_schema
            .findOne({
              user: datos.user,
              pswLogin: datos.pswLogin,
              id_prodct: DB._id.toString(),
            })
            .exec();
          console.log(2, userFound);
          if (userFound !== null) {
            return {
              statusCode: 200,
              datos: userFound,
              msj: `${datos.user} Bienvenido de vuelta`,
            };
          } else {
            return {
              statusCode: 403,
              msj: `${datos.user} / password incorrect`,
            };
          }
        } else {
          return await {
            statusCode: 403,
            datos: null,
            msj: `${datos.owner} no fue encontrado`,
          };
        }


  } catch (error) {
    console.error("Error in registerUser service:", error);
    throw error;
  } finally {
    await connection.close();
  }
};


export const AuthSessionService = async (user: string, password: string) => {
  const connection = await db();

  try {
    // Buscar el usuario en la base de datos
    const result = await connection.execute(
      `BEGIN
         AUTHENTICATE_USER(:user, :out_password, :out_email);
       END;`,
      {
        user,
        out_password: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
        out_email: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
      }
    );

    const outBinds = result.outBinds as AuthUserDTO;
    const outPassword = outBinds.out_password as string;

    if (!outPassword) {
      throw new Error("User not found");
    }

    // Comparar las contraseñas
    const isMatch = await bcrypt.compare(password, outPassword);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // Si la autenticación es exitosa, retornar el nombre de usuario y email
    return {
      username: user,
      email: outBinds.out_email,
    };
  } catch (error) {
    console.error("Error in authenticateUser service:", error);
    throw error;
  } finally {
    await connection.close();
  }
};
