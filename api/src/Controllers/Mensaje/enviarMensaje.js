/* Este código está exportando una función llamada `enviarMensajes` que se encarga de crear y enviar
mensajes. */
const { Mensajes } = require("../../db");

/**
 * La función `enviarMensajes` crea un nuevo mensaje con el contenido y el ID de usuario
 * proporcionados.
 * @param contenido - El contenido del mensaje que se enviará.
 * @param idUsuario - La identificación del usuario a quien se enviará el mensaje.
 * @returns el objeto de mensaje creado.
 */
const enviarMensaje = async (contenido, idUsuario) => {
  try {
    if (!contenido || !idUsuario) {
      throw new Error("Los datos del mensaje son inválidos.");
    }
    const mensaje = await Mensajes.create({
      contenido,
      idUsuario,
    });
    return mensaje;
  } catch (error) {
    throw error;
  }
};
module.exports = { enviarMensaje };
