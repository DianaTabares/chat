const { Router } = require("express");
const usuario = require("./Usuario/routeUsuario");
const router = Router();

router.use("/usuario", usuario);

module.exports = router;
