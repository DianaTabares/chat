/* Este código exporta una función llamada `recuperarMensaje` que recupera mensajes de una base de
datos basada en un `id` determinado. */
const { Mensajes } = require("../../db");

/**
 * La función `recuperarMensaje` recupera mensajes asociados con un ID de usuario específico, incluidos
 * los datos de conversión relacionados.
 * @param id - El parámetro `id` es el identificador del usuario cuyos mensajes deben recuperarse.
 * @returns La función `recuperarMensaje` está devolviendo la variable `datos`, que contiene el
 * resultado de la consulta `findAll`.
 */
const recuperarMensaje = async (id) => {
  try {
    const datos = await Mensajes.findAll({
      where: {
        idUsuario: id,
      },
      include: [
        {
          model: Conversiones,
        },
      ],
    });
    return datos;
  } catch (error) {
    throw error;
  }
};
module.exports = { recuperarMensaje };
