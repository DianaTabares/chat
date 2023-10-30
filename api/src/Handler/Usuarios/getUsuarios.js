/* Este código exporta una función llamada `getUsuarios` que maneja una solicitud GET para recuperar
usuarios. */
const {
  mostrarUsuarios,
} = require("../../Controllers/Usuarios/mostrarUsuarios");

/**
 * La función `getUsuarios` es una función asincrónica que recupera y devuelve una lista de usuarios,
 * manejando cualquier error que pueda ocurrir.
 * @param req - El parámetro `req` es el objeto de solicitud, que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, el cuerpo de la solicitud y los
 * parámetros de la solicitud. Se utiliza para recuperar datos del cliente y pasarlos al servidor.
 * @param res - El parámetro "res" es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado, los encabezados y enviar el cuerpo de la respuesta. En este fragmento de código,
 * se utiliza para enviar un
 * @returns La función `getUsuarios` está devolviendo un objeto de respuesta con un código de estado de
 * 200 y un objeto JSON que contiene los datos del `usuario` si la función `mostrarUsuarios` tiene
 * éxito. Si hay un error, devolverá un objeto de respuesta con un código de estado de 500 y un objeto
 * JSON que contiene el mensaje de error.
 */
const getUsuarios = async (req, res) => {
  const { nombre } = req.query;

  try {
    const usuario = await mostrarUsuarios(nombre);
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsuarios };
