const { crearUsuario } = require("../../Controllers/Usuarios/crearUsuario");

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
