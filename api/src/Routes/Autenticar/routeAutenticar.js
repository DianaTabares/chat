/* Este código importa la función `handlerAuthUsuario` desde el archivo `handlerAuthUsuario.js` ubicado
en el directorio `../../Handler/Autenticar/`. */
const {
  handlerAuthUsuario,
} = require("../../Handler/Autenticar/handlerAuthUsuario.js");

const router = express.Router();

router.get("/", handlerAuthUsuario);

module.exports = router;
