const { getConversion } = require("../../Handler/Conversion/getConversion");

const router = require("express").Router();

router.get("/", getConversion);

module.exports = router;
