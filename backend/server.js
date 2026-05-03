const express = require("express");
const mongoose = require("mongoose");

// iniciamos app server
const app = express();

// middleware para leeer JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://marcelov27:mogondb27@cluster0.wgdl93g.mongodb.net/")
    .then(() => console.log("cconectado a mongodb"))
    .catch(err => console.log(err));

const modelodeproducto = new mongoose.Schema({
    nombre: String,
    precio: Number,
    desripcion: String
});

const producto = mongoose.model("producto", modelodeproducto);

//ruta base
app.get("/", (req, res) => {
    res.send("servidor corriendo");
});


//ver productos
let productos = []
app.get("/products", (req, res) =>{
    res.json(productos);
});

//enviar productos
app.post("/enviarProducto", (req, res) => {
    const nuevoproducto = {
        id : Date.now(),
        ...req.body
    };

    productos.push(nuevoproducto);
    res.send("producto agregado");

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
app.put("/products/:id", (req, res) => {
    const {id} = req.params;

    const  producto = productos.find( p => p.id == id);

    if (!producto) {
        res.send("producto no encontrado");
    }

    Object.assign(producto, req.body);
    res.send("producto actualizado");
});


//eliminar productos
app.delete("/eliminar/:id", (req, res) => {
    const {id} = req.params;

    productos = productos.filter(p => p.id != id);

    res.send("productos eliminado")
})


// puerto en la cual escucha mi servidor 
const PORT = 3000;


//escuchar conexion 
app.listen(PORT, () =>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});