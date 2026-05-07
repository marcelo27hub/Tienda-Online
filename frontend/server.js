require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// vistas
app.set("view engine", "pug");
app.set("views", "./views");

// uploads
app.use("/uploads", express.static("uploads"));

// mongo
mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Mongo conectado FRONT"))
    .catch(err => console.log(err));

// rutas
const tiendaRoutes = require("./routes/tiendaRoutes");
app.use("/", tiendaRoutes);

const PORT = process.env.PORT || 4000;
//escuchar conexion 
app.listen(4000, () =>{
    console.log("servidor corriendo en", PORT);
});