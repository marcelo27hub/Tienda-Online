const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")

const productoController = require("../controllers/productoController");

// admin
router.get("/", auth, productoController.getAdmin);

// crear
router.post("/crearProducto", auth, productoController.crearProducto);

//editar vista
router.get("/editar/:id", auth, productoController.vistaeditar);

//editar
router.post("/editar/:id", auth, productoController.editarproducto);

//eliminar
router.post("/eliminar/:id", auth, productoController.eliminarproducto);

module.exports = router;