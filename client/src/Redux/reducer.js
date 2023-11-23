/* Este código define una función reductora para una tienda Redux en JavaScript. */
import {
  POST_USUARIOS,
  POS_AUTH,
  POST_MENSAJE,
  GET_MENSAJE,
  GET_CAMBIO,
  GET_USER,
  LOGOUT,
} from "./action";

const initialState = {
  usuarios: [],
  respuestaBD: [],
  mostrar: [],
  mensajes: [],
  tasaDeCambio: [],
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USUARIOS:
      return {
        ...state,
        respuestaBD: action.payload,
      };
    case POS_AUTH:
      return {
        ...state,
        mostrar: action.payload,
      };
    case POST_MENSAJE:
      return {
        ...state,
        mensajes: [...state.mensajes, action.payload],
      };
    case GET_MENSAJE:
      return {
        ...state,
        mensajes: action.payload,
      };
    case GET_CAMBIO:
      return {
        ...state,
        tasaDeCambio: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        usuarios: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
