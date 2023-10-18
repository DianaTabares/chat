const { getConversion } = require("../../Handler/Conversion/getConversion");

const router = require("express").Router();

router.get("/:cantidad/:monedaOriginal/:monedaConvertida", getConversion);

module.exports = router;
