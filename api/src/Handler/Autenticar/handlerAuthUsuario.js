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
