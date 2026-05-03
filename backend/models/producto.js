//usamos mongoose para la base de datos
const mongoose = require("mongoose");

//modelo del producto
const modelproduct = new mongoose.Schema({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true}
});

//para poder usarlo en cualquier otro archivo
module.exports = mongoose.model("producto", modelproduct);

