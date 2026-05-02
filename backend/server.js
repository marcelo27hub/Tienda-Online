const express = require("express");

// iniciamos app server
const app = express();

// middleware para leeer JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//ruta base
app.get("/", (req, res) => {
    res.send("servidor corriendo");
});


app.get("/products", (req, res) =>{
    res.json(productos);
});

let productos = []
app.post("/enviarProducto", (req, res) => {
    productos.push(req.body);
    res.send("enviar productos");

})
app.get("/admin", (req, res) => {
    res.send("panel admin")
});

app.post("/login", (req, res) => {
    const {email, password} = req.body;

    if (email === "marce@" && password === "1234"){
        res.send("login exitoso");
    } else {
        res.send("datos incorrectos");
    }
});

app.put("/actualizar", (req, res) => {
    console.log(req.body);
    res.send("actualizar datos");
});



// puerto en la cual escucha mi servidor 
const PORT = 3000;


//escuchar conexion 
app.listen(PORT, () =>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});