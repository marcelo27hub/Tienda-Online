const express = require("express");
const mongoose = require("mongoose");

// iniciamos app server
const app = express();

//variable global, si el admin se logueo
let isLoggedIn = false;

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


// rutas
const productoRoutes = require("./routes/productoRoutes");
const producto = require("./models/producto");
app.use(productoRoutes);

// base
app.get("/", (req, res) => {
    res.send("servidor corriendo");
});

//login
app.get("/login", (req, res) => {
    res.render("login");
});

// datos del admin
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === "marce@" && password === "1234") {
        isLoggedIn = true
        res.redirect("/admin");
    } else {
        res.send("Datos incorrectos");
    }
});

// redireccionar a login si no se logueo. Y si lo hizo admin recibe los productos
app.get("/admin", async (req, res) => {
    if (!isLoggedIn) {
        return res.redirect("/login");
    }

    const productos = await producto.find();
    res.render("admin", { productos });
});

// logout 
app.get("/logout", (req, res) => {
    isLoggedIn = false;
    res.redirect("/login")
})


//escuchar conexion 
app.listen(3000, () =>{
    console.log("servidor corriendo en http://localhost:3000");
});