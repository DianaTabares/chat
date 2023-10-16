/* Este código crea un enrutador para manejar solicitudes HTTP en una aplicación Node.js utilizando el
marco Express. */
const { postUsuario } = require("../../Handler/Usuarios/postUsuarios");
const { getUsuario } = require("../../Handler/Usuarios/getUsuarios");

const router = require("express").Router();

router.post("/", postUsuario);
router.get("/", getUsuario);

module.exports = router;
