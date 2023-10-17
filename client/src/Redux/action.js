import axios from "axios";
export const POST_USUARIOS = "POST_USUARIOS";
export const POS_AUTH = "POST_AUTH";
export const GET_MENSAJE = "GET_MENSAJE";
export const POST_MENSAJE = "POST_MENSAJE";
export const GET_CAMBIO = "GET_CAMBIO";

export function postUsuarios(info) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/usuario", info);
      return dispatch({ type: POST_USUARIOS, payload: response.data });
    } catch (error) {
      dispatch({ type: "ERROR_POST_USUARIOS", payload: error.message });
    }
  };
}

export function postAUTH(info) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/auth", info);
      return dispatch({
        type: POS_AUTH,
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };
}

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

export function getTasaCambio() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/cambio");
      return dispatch({
        type: GET_CAMBIO,
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
}
