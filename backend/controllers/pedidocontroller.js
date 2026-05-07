const Pedido = require("../models/pedido");

// ver pedidos (ADMIN)
exports.verPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find().populate("producto");
        res.render("pedido", { pedidos });
    } catch (error) {
        res.status(500).send("Error cargando pedidos");
    }
};
// crear pedido (CLIENTE)
exports.crearPedido = async (req, res) => {
    try {
        const { producto, cantidad, nombreCliente, direccion } = req.body;

        if (!producto || !cantidad || !nombreCliente || !direccion) {
            return res.status(400).send("Faltan datos");
        }

        await Pedido.create({
            producto,
            cantidad,
            nombreCliente,
            direccion
        });

        res.redirect("/tienda");
    } catch (error) {
        res.status(500).send("Error creando pedido");
    }
};

// cambio de estado 
exports.cambiarEstado = async (req, res) => {
    try {
        const pedido = await Pedido.findById(req.params.id);

        if (!pedido) {
            return res.status(404).send("Pedido no encontrado");
        }

        // alternar estado
        pedido.estado = pedido.estado === "pendiente"
            ? "enviado"
            : "pendiente";

        await pedido.save();

        res.redirect("/admin/pedidos");
    } catch (error) {
        res.status(500).send("Error cambiando estado");
    }
};

// cancelar pedido
exports.cancelarPedido = async (req, res) => {
    try {
        await Pedido.findByIdAndUpdate(req.params.id, {
            estado: "cancelado"
        });

        res.redirect("/admin/pedidos");
    } catch (error) {
        res.status(500).send("Error cancelando pedido");
    }
};
