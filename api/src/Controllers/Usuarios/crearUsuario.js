const { Usuarios } = require("../../db");
const bcryptjs = require("bcryptjs");

const crearUsuario = async (nombre, password) => {
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
module.exports = { crearUsuario };
