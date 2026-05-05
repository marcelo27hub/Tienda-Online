const Pedido = require("../models/pedido");

// ver pedidos (ADMIN)
exports.verPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find().populate("producto");
        res.render("pedidos", { pedidos });
    } catch (error) {
        res.status(500).send("Error cargando pedidos");
    }
};