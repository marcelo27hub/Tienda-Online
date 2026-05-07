const express = require("express");
const router = express.Router();

const tiendaController = require("../controllers/tiendacontroller");

//tienda
router.get("/tienda", tiendaController.verTienda);

// crear pedido
router.post("/pedido", tiendaController.crearPedido);

module.exports = router;
