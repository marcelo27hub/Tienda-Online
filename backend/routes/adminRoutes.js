const express = require("express");
const router = express.Router();


const adminController = require("../controllers/adminController");

// pedir login, enviar login, cerrar sesion
router.get("/login", adminController.getLogin);
router.post("/login", adminController.postLogin);
router.post("/logout", adminController.logout);

module.exports = router;