import axios from "axios";
export const POST_USUARIOS = "POST_USUARIOS";
export const GET_USUARIOS = "GET_USUARIOS";

export function postUsuarios(info) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/usuario", info);
      return dispatch({ type: POST_USUARIOS, payload: response.data });
    } catch (error) {
      return dispatch(error.message);
    }
  };
}

export function getUsuarios() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/auth");
      return dispatch({
        type: GET_USUARIOS,
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };
}
