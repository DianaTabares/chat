/* Este código define una función llamada `postMensaje` que maneja una solicitud POST. */
const { enviarMensaje } = require("../../Controllers/Mensaje/enviarMensaje");

/**
 * La función `postMensaje` es una función asincrónica que toma un objeto de solicitud y respuesta,
 * extrae el `contenido` y el `idUsuario` del cuerpo de la solicitud, verifica si no están vacíos y
 * luego llama a la función `enviarMensaje` con el objeto extraído. valores. Si tiene éxito, registra
 * el resultado y devuelve un código de estado 201 con el resultado como JSON. Si hay un error,
 * devuelve un código de estado 400 con el mensaje de error en formato JSON.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP realizada por el cliente. Incluye propiedades como los encabezados de la solicitud,
 * el cuerpo de la solicitud, el método de la solicitud y la URL de la solicitud.
 * @param res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado, enviar datos JSON o enviar un mensaje de error.
 * @returns una respuesta con un código de estado y un objeto JSON. Si los campos `contenido` o
 * `idUsuario` están vacíos, devolverá un código de estado 404 con el mensaje "¡los campos no deben
 * estar vacios...!". Si hay un error durante la llamada a la función `enviarMensaje`, devolverá un
 * código de estado 400 con el mensaje de error. De lo contrario,
 */
const postMensaje = async (req, res) => {
  const { contenido, idUsuario } = req.body;
  if (!contenido || !idUsuario) {
    return res.status(404).json("los campos no deben estar vacios...!");
  }
  try {
    const enviar = await enviarMensaje(contenido, idUsuario);
    console.log(enviar);
    return res.status(201).json(enviar);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Hubo un error al enviar el mensaje." });
  }
};
module.exports = { postMensaje };
