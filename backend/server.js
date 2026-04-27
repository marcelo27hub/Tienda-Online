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

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});