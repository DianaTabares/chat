const { conversiones } = require("../../db");
const { API_KEY } = process.env;
const axios = require("axios");

const obtenerTasasDeCambio = async () => {
  try {
    const response = await axios.get(`${API_KEY}`);
    return response.data.rates;
  } catch (error) {
    throw error;
  }
};
module.exports = { obtenerTasasDeCambio };
