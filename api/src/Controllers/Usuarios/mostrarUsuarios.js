/* Este código exporta una función llamada `mostrarUsuarios` que recupera todos los usuarios de una
base de datos. */
/* Este código exporta una función llamada `mostrarUsuario` que recupera todos los usuarios de una base
de datos. */
const { Usuarios } = require("../../db");
const { Op } = require("sequelize");

/**
 * La función `mostrarUsuarios` es una función asincrónica que recupera un usuario de una base de datos
 * en función de su nombre.
 * @param nombre - El parámetro `nombre` es una cadena que representa el nombre del usuario que deseas
 * encontrar en la base de datos.
 * @returns La función `showUsers` devuelve el resultado del método `findOne` del modelo `ShowUsers`.
 */
const mostrarUsuarios = async (nombre) => {
  return await Usuarios.findOne({
    where: { nombre: { [Op.iLike]: nombre } },
  });
};
module.exports = {
  mostrarUsuarios,
};
