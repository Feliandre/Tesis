export async function validarContraseña(password: string) {
  const errores = [];

  // Verifica que la contraseña tenga al menos 8 caracteres
  if (password.length < 6) {
    errores.push("La contraseña debe tener al menos 8 caracteres");
  }

  // Verifica que la contraseña tenga al menos una letra mayúscula
  if (!password.match(/[A-Z]+/)) {
    errores.push("La contraseña debe tener al menos una letra mayúscula");
  }

  // Verifica que la contraseña tenga al menos una letra minúscula
  if (!password.match(/[a-z]+/)) {
    errores.push("La contraseña debe tener al menos una letra minúscula");
  }

  // Verifica que la contraseña tenga al menos un número
  if (!password.match(/[0-9]+/)) {
    errores.push("La contraseña debe tener al menos un número");
  }

  // Verifica que la contraseña tenga al menos un símbolo especial
  if (!password.match(/[!@#$%^&*()_+~-]/)) {
    errores.push("La contraseña debe tener al menos un símbolo especial");
  }

  return errores;
}

export async function validarEmail(email: string) {

  const errores = [];
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Verifica que el email tenga el formato correcto
  if (!regex.test(email)) {
    errores.push("El email no tiene el formato correcto");
  }

  return errores;
}
