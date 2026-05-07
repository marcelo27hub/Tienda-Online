const mongoose = require("mongoose");

// modelo de los pedidos
const pedidoSchema = new mongoose.Schema({
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "producto",
        required: true
    },
    cantidad: {
        type: Number,
        required: true,
        min: 1
    },
    nombreCliente: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        enum: ["pendiente", "enviado", "cancelado"],
        default: "pendiente"
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Pedido", pedidoSchema);