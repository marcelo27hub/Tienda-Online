const Producto = require("../models/producto");
const Pedido = require("../models/pedido");

// ver tienda
exports.verTienda = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.render("tienda", { productos });
    } catch  (error){
        res.status(500).send("Error al cargar la tienda");
    }
};

// crear pedido
exports.crearPedido = async (req, res) => {
    try{
        const {producto, cantidad, nombreCliente, direccion} = req.body;

        await Pedido.create({
            producto,
            cantidad,
            nombreCliente,
            direccion
        });
        
        res.redirect("/tienda");
    } catch (error) {
        res.status(500).send("Error creando el pedido")
    }

};