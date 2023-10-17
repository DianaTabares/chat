import { POST_USUARIOS, GET_USUARIOS } from "./action";

const initialState = {
  respuestaBD: [],
  mostrar: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USUARIOS:
      return {
        ...state,
        respuestaBD: action.payload,
      };
    case GET_USUARIOS:
      return {
        ...state,
        mostrar: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
