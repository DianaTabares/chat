/* Este código es un módulo de JavaScript que exporta una función llamada `autenticarUsuario`. */
const { Usuarios } = require("../../db");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { CLAVE_AUTH } = process.env;

/**
 * La función `autenticarUsuario` es una función asincrónica que autentica a un usuario verificando su
 * nombre de usuario y contraseña, y devuelve un token si la autenticación es exitosa.
 * @param nombre - El parámetro "nombre" representa el nombre de usuario o nombre del usuario que
 * intenta autenticarse.
 * @param password - El parámetro de contraseña es la contraseña ingresada por el usuario para la
 * autenticación.
 * @returns una Promesa que se resuelve en un objeto que contiene el token, la identificación del
 * usuario y el nombre de usuario si la autenticación es exitosa. Si hay un error durante la creación
 * del token, la Promesa lo rechazará con un mensaje de error.
 */
const autenticarUsuario = async (nombre, password) => {
  try {
    const usuario = await Usuarios.findOne({
      where: { nombre: nombre },
    });
    const contraseñaValida = await bcryptjs.compare(password, usuario.password);

    if (!usuario || !contraseñaValida) {
      throw new Error("Usuario o email incorrectos");
    }

    const payload = {
      user: { id: usuario.idUsuario },
    };

    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        CLAVE_AUTH,
        {
          expiresIn: "1d",
        },
        (err, token) => {
          if (err) {
            reject({ msg: "Error al crear el Token" });
          }
          const auth = {
            token,
            id: usuario.idUser,
            nombre: usuario.email,
          };
          resolve(auth);
        }
      );
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  autenticarUsuario,
};
