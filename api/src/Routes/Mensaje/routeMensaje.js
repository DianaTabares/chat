/* Este código crea un enrutador para manejar solicitudes HTTP en una aplicación Node.js utilizando el
marco Express. */
const { postMensaje } = require("../../Handler/Mensaje/postMensaje");
const { getMensajeById } = require("../../Handler/Mensaje/getMensajeById");

const router = require("express").Router();

router.post("/", postMensaje);
router.get("/:id", getMensajeById);

module.exports = router;
