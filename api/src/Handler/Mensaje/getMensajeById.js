/* Este código exporta una función llamada `getMensajeById` como módulo. */
const {
  recuperarMensaje,
} = require("../../Controllers/Mensaje/recuperarMensaje");

/**
 * La función `getMensajeById` recupera un mensaje por su ID y lo devuelve como una respuesta JSON, o
 * devuelve un mensaje de error si no se encuentra el mensaje.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, los parámetros de la solicitud, el
 * cuerpo de la solicitud, etc. Se utiliza para recuperar el parámetro `id` de la URL de la solicitud.
 * @param res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado y enviar datos JSON.
 * @returns una respuesta con un código de estado de 200 y el mensaje recuperado como un objeto JSON si
 * el mensaje se recupera correctamente. Si hay un error, devuelve una respuesta con un código de
 * estado de 404 y un mensaje de error como un objeto JSON.
 */
const getMensajeById = async (req, res) => {
  const { id } = req.params;
  try {
    const mensaje = await recuperarMensaje(id);
    return res.status(200).json(mensaje);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = { getMensajeById };
