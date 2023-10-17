/* Este código crea un enrutador para manejar solicitudes HTTP en una aplicación Node.js utilizando el
marco Express. */
const { postUsuarios } = require("../../Handler/Usuarios/postUsuarios");
const { getUsuarios } = require("../../Handler/Usuarios/getUsuarios");

const router = require("express").Router();

router.post("/", postUsuarios);
router.get("/", getUsuarios);

module.exports = router;
