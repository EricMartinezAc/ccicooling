import { IntoUserAuthDTO } from "../dto/into.user.auth.dto";
import { IntoUserRegtrDTO } from "../dto/into.user.regtr.dto";


const validateUser = (user: string): boolean => {
  const alphanumericRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,11}$/;
  if (!alphanumericRegex.test(user)) {
    return false;
  }
  return true;
};

const validatePassword = (psw: string): boolean => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}$/;
  if (!passwordRegex.test(psw)) {
    return false;
  }
  return true;
};

const ValideInputSession = async (body: any): Promise<boolean> => {
  if (body.owner || body.clav_prodct) {
    const { owner, clav_prodct }: IntoUserRegtrDTO = body
  }
  const { user, pswLogin }: IntoUserAuthDTO = body
  console.log({ user, pswLogin });
  

  return await validateUser(user) && await validatePassword(pswLogin) ? true : false

}

export default ValideInputSession
