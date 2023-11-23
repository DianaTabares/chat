/* El código es un módulo de JavaScript que exporta varias funciones y constantes relacionadas con la
realización de solicitudes HTTP utilizando la biblioteca Axios. Aquí hay un desglose de lo que hace
el código: */
import axios from "axios";
export const POST_USUARIOS = "POST_USUARIOS";
export const POS_AUTH = "POST_AUTH";
export const GET_MENSAJE = "GET_MENSAJE";
export const POST_MENSAJE = "POST_MENSAJE";
export const GET_CAMBIO = "GET_CAMBIO";
export const GET_USER = "GET_USER";
export const LOGOUT = "LOGOUT";

/**
 * La función `postUsuarios` es una acción asincrónica que envía una solicitud POST a un punto final
 * del servidor y envía una acción con los datos de respuesta o un mensaje de error.
 * @param info - El parámetro `info` es un objeto que contiene los datos a enviar en el cuerpo de la
 * solicitud al realizar la solicitud POST al endpoint "http://localhost:3001/usuario". Estos datos
 * serán utilizados para crear un nuevo usuario en el sistema.
 * @returns una acción de envío con el tipo "POST_USUARIOS" y la carga útil como los datos recibidos de
 * la solicitud de publicación de axios.
 */
export function postUsuarios(info) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post("http://localhost:3001/usuario", info);
      return dispatch({ type: POST_USUARIOS, payload: data });
    } catch (error) {
      dispatch({ type: "ERROR_POST_USUARIOS", payload: error.message });
    }
  };
}

/**
 * La función `getUser` es un creador de acciones asincrónicas que realiza una solicitud HTTP GET para
 * recuperar datos del usuario en función del nombre proporcionado y envía una acción con los datos
 * recuperados.
 * @param info - El parámetro `info` es un objeto que contiene la información del usuario. Debe tener
 * una propiedad llamada `nombre` que represente el nombre del usuario.
 * @returns una acción de envío con el tipo "GET_USER" y la carga útil como los datos recibidos de la
 * solicitud API.
 */
export function getUser(info) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/usuario?nombre=${info.nombre}`
      );
      return dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
}

/**
 * La función `postAUTH` es una acción asincrónica que envía una solicitud POST al punto final
 * "http://localhost:3001/auth" con los datos `info` proporcionados y envía una acción con los datos de
 * respuesta.
 * @param info - El parámetro "info" es un objeto que contiene los datos que se enviarán en el cuerpo
 * de la solicitud al servidor. Por lo general, incluye información como el nombre de usuario y la
 * contraseña del usuario con fines de autenticación.
 * @returns una acción de envío con el tipo "POS_AUTH" y la carga útil como los datos recibidos de la
 * solicitud POST a "http://localhost:3001/auth".
 */
export function postAUTH(info) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post("http://localhost:3001/auth", info);
      return dispatch({
        type: POS_AUTH,
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };
}

/**
 * La función `getMensaje` es un creador de acciones asincrónico que realiza una solicitud HTTP GET
 * para recuperar un mensaje basado en una ID y envía una acción con los datos recuperados.
 * @param id - El parámetro `id` es el identificador del mensaje que desea recuperar. Se utiliza para
 * construir la URL para la solicitud GET al servidor.
 * @returns una función de despacho.
 */
export function getMensaje(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/enviar/${id}`);
      return dispatch({
        type: GET_MENSAJE,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: "ERROR_GET_MENSAJE", payload: error.message });
    }
  };
}

/**
 * La función `postMensaje` es una acción asincrónica que envía una solicitud POST a una URL
 * especificada con los datos de `info` proporcionados y envía una acción con los datos de respuesta o
 * un mensaje de error.
 * @param info - El parámetro `info` es un objeto que contiene los datos que se enviarán en la
 * solicitud POST. Podría incluir propiedades como el contenido del mensaje, información del remitente,
 * información del destinatario, etc.
 * @returns La función `postMensaje` devuelve una función que toma un parámetro `dispatch`.
 */
export function postMensaje(info) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/enviar", info);
      return dispatch({ type: POST_MENSAJE, payload: response.data });
    } catch (error) {
      dispatch({ type: "ERROR_POST_MENSAJE", payload: error.message });
    }
  };
}

/**
 * La función recupera el tipo de cambio entre dos monedas mediante una API y envía el resultado a la
 * tienda Redux.
 * @param cantidad - La cantidad de moneda a convertir.
 * @param monedaOriginal - El parámetro "monedaOriginal" representa la moneda original desde la que
 * desea realizar la conversión. Podría ser un valor de cadena que represente el código o nombre de la
 * moneda, como "USD" para dólares estadounidenses o "EUR" para euros.
 * @param monedaConvertida - El parámetro "monedaConvertida" representa la moneda a la que se desea
 * convertir la moneda original.
 * @returns una función que toma un parámetro de despacho.
 */
export function getTasaCambio(cantidad, monedaOriginal, monedaConvertida) {
  return async function (dispatch) {
    try {
      const url = `http://localhost:3001/cambio/${cantidad}/${monedaOriginal}/${monedaConvertida}`;
      const { data } = await axios.get(url);
      return dispatch({
        type: GET_CAMBIO,
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
}

export function logout() {
  return {
    type: "LOGOUT",
  };
}
