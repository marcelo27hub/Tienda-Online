const express = require("express");
const mongoose = require("mongoose");

// iniciamos app server
const app = express();

// middleware para leeer JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//motor de plantilla pug
app.set("view engine", "pug");
app.set("views", "./views");

//conexión a la base de datos MongoDB usando URI (Atlas)
mongoose.connect("mongodb+srv://marcelov:mongodb27@cluster0.wgdl93g.mongodb.net/")
    .then(() => console.log("conectado a mongodb"))
    .catch(err => console.log(err));

//modelo de productos (mongoDB)
const Producto = require("./models/producto");

//ruta base
app.get("/", (req, res) => {
    res.send("servidor corriendo");
});


//ver productos
app.get("/productos", async  (req, res) =>{
    const productos = await Producto.find();
    res.json(productos);
});

//admin panel
app.get("/admin", async (req, res) => {
    const productos = await Producto.find();
    res.render("admin", {productos});
})

// Crear productos
app.post("/crearProducto", async (req, res) => {
    await Producto.create(req.body);
    res.redirect("/admin");

});

//vista editar productos
app.get("/editar/:id", async (req, res) => {
    const producto = await Producto.findById(req.params.id,);
    res.render("editar", {producto});
});

// generar edicion
app.post("/editar/:id", async (req, res) => {
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/admin")
})

//eliminar productos
app.post("/eliminar/:id", async (req, res) => {
    await Producto.findByIdAndDelete(
        req.params.id, 
        req.body);

    res.redirect("/admin")
});

//datos login admin
app.post("/login", (req, res) => {
    const {email, password} = req.body;

    if (email === "marce@" && password === "1234"){
        res.send("login exitoso");
    } else {
        res.send("datos incorrectos");
    }
});

// puerto en la cual escucha mi servidor 
const PORT = 3000;


//escuchar conexion 
app.listen(PORT, () =>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});