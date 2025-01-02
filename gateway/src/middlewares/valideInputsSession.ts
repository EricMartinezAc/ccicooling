interface User {
  user: string;
  pswLogin: string;
}


const validateUser = (user: string): boolean => {
  const alphanumericRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,8}$/;
  if (!alphanumericRegex.test(user)) {
    return false;
  }
  return true;
};

const validatePassword = (psw: string): boolean => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,8}$/;
  if (!passwordRegex.test(psw)) {
    return false;
  }
  return true;
};

const ValideInputSession = async (user: User) => {
  return validateUser(user.user) && validatePassword(user.pswLogin) ? true : false
}

export default ValideInputSession
