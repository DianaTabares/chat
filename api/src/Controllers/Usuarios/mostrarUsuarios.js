/* Este código exporta una función llamada `mostrarUsuario` que recupera todos los usuarios de una base
de datos. */
const { Usuarios } = require("../../db");

/**
 * La función "mostrarUsuario" devuelve todos los usuarios de la colección "Usuarios".
 * @returns La función `mostrarUsuario` devuelve el resultado del método `findAll` del objeto `mostrarUsuarios`.
 */
const mostrarUsuario = async () => {
  return await Usuarios.findAll();
};
module.exports = {
  mostrarUsuario,
};
