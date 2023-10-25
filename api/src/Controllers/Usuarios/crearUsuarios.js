/* Este código define una función llamada `crearUsuario` que crea un nuevo usuario en una base de
datos. */
const { Usuarios } = require("../../db");
const bcryptjs = require("bcryptjs");

/**
 * La función `crearUsuario` crea un nuevo usuario con un nombre y contraseña determinados, cifra la
 * contraseña usando bcryptjs y guarda al usuario en una base de datos.
 * @param nombre - El parámetro "nombre" representa el nombre del usuario que se está creando.
 * @param password - El parámetro de contraseña es la contraseña que el usuario desea establecer para
 * su cuenta.
 * @returns La función `crearUsuario` devuelve el objeto de usuario recién creado.
 */
const crearUsuarios = async (nombre, password) => {
  try {
    if (!nombre || !password) {
      throw new Error("nombre y contraseña es  requeridos!");
    }

    if (password) password = await bcryptjs.hash(password, 10);

    const nuevo = await Usuarios.create({
      nombre,
      password,
    });
    return nuevo;
  } catch (error) {
    throw error;
  }
};
module.exports = { crearUsuarios };
