const express = require("express");
const mongoose = require("mongoose");

// iniciamos app server
const app = express();

// middleware para leeer JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://marcelov:mongodb27@cluster0.wgdl93g.mongodb.net/")
    .then(() => console.log("conectado a mongodb"))
    .catch(err => console.log(err));

const modelodeproducto = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: true }
});

const Producto = mongoose.model("producto", modelodeproducto);

//ruta base
app.get("/", (req, res) => {
    res.send("servidor corriendo");
});


//ver productos
app.get("/productos", async  (req, res) =>{
    const productos = await Producto.find();
    res.json(productos);
});

//enviar productos
app.post("/crearProducto", async (req, res) => {
    const nuevoproducto = await Producto.create(req.body);
    res.json(nuevoproducto);

});

//ver panel de admin
app.get("/admin", (req, res) => {
    res.send("panel admin")
});


//enviar datos 
app.post("/login", (req, res) => {
    const {email, password} = req.body;

    if (email === "marce@" && password === "1234"){
        res.send("login exitoso");
    } else {
        res.send("datos incorrectos");
    }
});


//actualizar productos
app.put("/products/:id", async (req, res) => {
    const actualizado = await Producto.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.json(actualizado);
});


//eliminar productos
app.delete("/eliminar/:id", async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.send("producto eliminado")
});


// puerto en la cual escucha mi servidor 
const PORT = 3000;


//escuchar conexion 
app.listen(PORT, () =>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});