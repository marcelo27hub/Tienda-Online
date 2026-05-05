const express = require("express");
const router = express.Router();

const tiendaController = require("../controllers/tiendaController");

// vista cliente
router.get("/tienda", tiendaController.verTienda);

module.exports = router;