const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

// iniciamos app server
const app = express();

// middleware para leeer JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// config de la sesion
app.use(session({
    secret: "secreto_jeje",
    resave: false,
    saveUninitialized: false
}));


//motor de plantilla pug
app.set("view engine", "pug");
app.set("views", "./views");

//conexión a la base de datos MongoDB usando URI (Atlas)
mongoose.connect("mongodb+srv://marcelov:mongodb27@cluster0.wgdl93g.mongodb.net/")
    .then(() => console.log("conectado a mongodb"))
    .catch(err => console.log(err));


// rutas
const productoRoutes = require("./routes/productoRoutes");
app.use("/admin", productoRoutes);

const adminRoutes = require("./routes/adminRoutes")
app.use("/", adminRoutes);

// base
app.get("/", (req, res) => {
    res.send("servidor corriendo");
});


//escuchar conexion 
app.listen(3000, () =>{
    console.log("servidor corriendo en http://localhost:3000");
});