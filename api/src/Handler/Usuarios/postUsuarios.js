const { crearUsuario } = require("../../Controllers/Usuarios/crearUsuario");

/**
 * La función `postUsuario` es una función asincrónica que crea un nuevo usuario con un nombre y
 * contraseña determinados y devuelve los datos del usuario creado en formato JSON.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP realizada por el cliente. Incluye propiedades como "cuerpo", "params", "consulta",
 * "encabezados", etc.
 * @param res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado, enviar datos JSON o enviar un mensaje de error.
 * @returns una respuesta con un código de estado y un objeto JSON. Si los campos "nombre" o
 * "contraseña" están vacíos, devolverá un código de estado 404 con el mensaje "¡los campos no deben
 * estar vacios...!". Si la creación del usuario es exitosa, devolverá un código de estado 201 con los
 * datos del usuario en formato JSON. Si hay un error durante
 */
const postUsuario = async (req, res) => {
  const { nombre, password } = req.body;
  if (!nombre || !password) {
    return res.status(404).send("los campos no deben estar vacios...!");
  }
  try {
    const datos = await crearUsuario(nombre, password);
    console.log(datos);
    return res.status(201).json(datos);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
module.exports = { postUsuario };
