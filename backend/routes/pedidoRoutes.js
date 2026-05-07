const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// traemos la logica de pedidos
const pedidoController = require("../controllers/pedidoController");

// pedidos
router.get("/pedidos", auth, pedidoController.verPedidos);

// crear pedido (CLIENTE)
router.post("/pedido", pedidoController.crearPedido);

// estado del pedido
router.post("/pedidos/:id/estado", auth, pedidoController.cambiarEstado);


// cancelar pedido
router.post("/pedidos/:id/cancelar", auth, pedidoController.cancelarPedido);


module.exports = router;    