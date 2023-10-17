import {
  POST_USUARIOS,
  POS_AUTH,
  POST_MENSAJE,
  GET_MENSAJE,
  GET_CAMBIO,
} from "./action";

const initialState = {
  respuestaBD: [],
  mostrar: [],
  mensajes: [],
  tasaDeCambio: null,
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
    default:
      return state;
  }
};

export default reducer;
