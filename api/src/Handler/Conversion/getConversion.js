const {
  obtenerTasasDeCambio,
} = require("../../Controllers/Conversion/obtenerTasasDeCambio");

const getConversion = async (req, res) => {
  const { cantidad, monedaOriginal, monedaConvertida } = req.params;
  try {
    const resultado = await obtenerTasasDeCambio(
      cantidad,
      monedaOriginal,
      monedaConvertida
    );
    res.status(200).json(resultado);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = { getConversion };
