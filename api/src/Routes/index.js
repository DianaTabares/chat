/* Este código crea un enrutador para una aplicación Express en JavaScript. */
const { Router } = require("express");
const usuario = require("./Usuario/routeUsuario");
const auth = require("./Autenticar/routeAutenticar");
const enviar = require("./Mensaje/routeMensaje");
const cambio = require("./Conversion/routeConversion");
const router = Router();

router.use("/usuario", usuario);
router.use("/enviar", enviar);
router.use("/auth", auth);
router.use("/cambio", cambio);

module.exports = router;
