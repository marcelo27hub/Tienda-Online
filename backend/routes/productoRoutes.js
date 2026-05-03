const express = require("express");
const router = express.Router();

const productoController = require("../controllers/productoController");

// admin
router.get("/admin", productoController.getAdmin);

// crear
router.post("/crearProducto", productoController.crearProducto);

//editar vista
router.get("/editar/:id", productoController.vistaeditar);

//editar
router.post("/editar/:id", productoController.editarproducto);

//eliminar
router.post("/eliminar/:id", productoController.eliminarproducto);

module.exports = router;