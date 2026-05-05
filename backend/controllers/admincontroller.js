const bcrypt = require("bcrypt");

//login admin
exports.getLogin = (req, res) => {
    res.render("login");
};

// enviar datos del admin
exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    
    // validacion basica
    if (!email || !password){
        return res.status(400).send("Faltan datos");
    }

    if (email !== process.env.ADMIN_PASSWORD){
        return res.status(401).send("Credenciales incorrectos");
    }

    const isMatch = bcrypt.compare(password, process.env.ADMIN_PASSWORD);

    if (!isMatch) {
        return res.status(401).send("Credenciales incorrectas");
    }

    req.session.isLoggedIn = true;
    return res.redirect("/admin");
};

// cerrar sesion admin
exports.logout = (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.status(500).send("Error cerrando sesion");
        }
        res.redirect("/login");
    });
};