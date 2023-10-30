/* Este código exporta una función llamada `mostrarUsuario` que recupera todos los usuarios de una base
de datos. */
const { Usuarios } = require("../../db");
const { Op } = require("sequelize");

/**
 * La función "mostrarUsuario" devuelve todos los usuarios de la colección "Usuarios".
 * @returns La función `mostrarUsuario` devuelve el resultado del método `findAll` del objeto `mostrarUsuarios`.
 */
const mostrarUsuarios = async (nombre) => {
  return await Usuarios.findOne({
    where: { nombre: { [Op.iLike]: nombre } },
  });
};
module.exports = {
  mostrarUsuarios,
};
