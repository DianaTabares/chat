/* Este código importa la función `handlerAuthUsuario` desde el archivo `handlerAuthUsuario.js` ubicado
en el directorio `../../Handler/Autenticar/`. */
const {
  handlerAuthUsuario,
} = require("../../Handler/Autenticar/handlerAuthUsuario.js");

const router = require("express").Router();

router.post("/", handlerAuthUsuario);

module.exports = router;
