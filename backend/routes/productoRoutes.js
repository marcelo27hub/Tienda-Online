const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const multer = require("multer");
const productoController = require("../controllers/productoController");
const upload = require("../middleware/upload"); 

// admin
router.get("/", auth, productoController.getAdmin);

// imagenes
router.post("/crearProducto", auth, upload.single("imagen"), productoController.crearProducto);


//editar vista
router.get("/editar/:id", auth, productoController.vistaeditar);

//editar
router.post("/editar/:id", auth, productoController.editarproducto);

//eliminar
router.post("/eliminar/:id", auth, productoController.eliminarproducto);



module.exports = router;