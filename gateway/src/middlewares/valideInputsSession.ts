interface User {
    user: string; 
    psw: string; 
    contacto: string; 
  }
  
  // Validación usando expresiones regulares
  type ValidationResult = { valid: boolean; message?: string };
  
  const validateUser = (user: string): ValidationResult => {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(user)) {
      return { valid: false, message: "El nombre de usuario debe ser alfanumérico." };
    }
    return { valid: true };
  };
  
  const validatePassword = (psw: string): ValidationResult => {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{5,}$/;
    if (!passwordRegex.test(psw)) {
      return { valid: false, message: "La contraseña debe ser alfanumérica, incluir !@#$%^&*, y tener al menos 5 caracteres." };
    }
    return { valid: true };
  };
  
  const validateContacto = (contacto: string): ValidationResult => {
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!emailRegex.test(contacto) && !alphanumericRegex.test(contacto)) {
      return { valid: false, message: "El contacto debe ser un correo electrónico válido o un valor alfanumérico." };
    }
    return { valid: true };
  };

  export default function ValideInputSession (user:User) {
    return 
  }
  