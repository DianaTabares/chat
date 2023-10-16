/**
 * La función `handlerAuthUsuario` es una función asincrónica que maneja la autenticación del usuario y
 * devuelve un token si tiene éxito; de lo contrario, devuelve un mensaje de error.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, el cuerpo de la solicitud y los
 * parámetros de la solicitud. Por lo general, lo proporciona el marco web o el servidor que maneja la
 * solicitud.
 * @param res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Es una instancia de la clase `http.ServerResponse` en Node.js.
 */
const handlerAuthUsuario = async (req, res) => {
  try {
    const { nombre, password } = req.body;
    const token = await authenticateUser(nombre, password);
    res.status(200).json(token);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { handlerAuthUsuario };
