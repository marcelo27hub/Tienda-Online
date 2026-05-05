const Producto = require("../models/producto");

exports.verTienda = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.render("tienda", { productos });
    } catch (error) {
        res.status(500).send("Error cargando tienda");
    }
};