const {
  handlerAuthUsuario,
} = require("../../Handler/Autenticar/handlerAuthUsuario.js");

const router = express.Router();

router.get("/", handlerAuthUsuario);

module.exports = router;
