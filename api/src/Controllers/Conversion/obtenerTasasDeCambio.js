/* Este código es una función de JavaScript que recupera tipos de cambio de una API y guarda los datos
de conversión en una base de datos. */
const { Conversiones } = require("../../db");
const { API_KEY } = process.env;
const axios = require("axios");

/**
 * La función "obtenerTasasDeCambio" es una función asíncrona que recupera datos de tipos de cambio y
 * crea un nuevo registro de conversión.
 * @param cantidad - La cantidad de moneda a convertir.
 * @param monedaOriginal - La moneda original desde la que desea realizar la conversión.
 * @param monedaConvertida - El parámetro "monedaConvertida" representa la moneda a la que se
 * convertirá la moneda original.
 * @returns un objeto con dos propiedades: "cantidadConvertida" y "nuevaConversión".
 */
const obtenerTasasDeCambio = async (
  cantidad,
  monedaOriginal,
  monedaConvertida
) => {
  try {
    const response = await axios.get(API_KEY);
    console.log(monedaConvertida);
    if (response.status === 200) {
      const data = response.data;
      const tasaCambio = data.data[monedaConvertida].value;

      if (tasaCambio) {
        const cantidadConvertida = cantidad * tasaCambio;
        console.log("Cantidad convertida:", cantidadConvertida);

        const nuevaConversion = await Conversiones.create({
          cantidad,
          monedaOriginal,
          cantidadConvertida,
          monedaConvertida,
          tasaConversion: tasaCambio,
        });

        return {
          cantidadConvertida,
          nuevaConversion,
        };
      } else {
        return "Tasa de cambio no válida.";
      }
    } else {
      return "Error al obtener los datos de conversión.";
    }
  } catch (error) {
    throw error;
  }
};
module.exports = { obtenerTasasDeCambio };
