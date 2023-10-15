const { postUsuario } = require("../../Handler/Usuarios/postUsuarios");

const router = require("express").Router();

router.post("/", postUsuario);

module.exports = router;
