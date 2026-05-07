//usamos mongoose para la base de datos
const mongoose = require("mongoose");

//modelo del producto
const modelproduct = new mongoose.Schema({
    imagen: { type: String },
    nombre: {type: String, required: true, trim: true},
    precio: {type: Number, required: true, min: 1},
    descripcion: {type: String, required: true, trim: true}
});

//para poder usarlo en cualquier otro archivo
module.exports = mongoose.model("producto", modelproduct);

