const { Usuarios } = require("../../db");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { CLAVE_AUTH } = process.env;

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
