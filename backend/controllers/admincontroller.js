//login admin
exports.getLogin = (req, res) => {
    res.render("login");
};

// enviar datos del admin
exports.postLogin = (req, res) => {
    const { email, password } = req.body;
    
    // validacion basica
    if (!email || !password){
        return res.status(400).send("Faltan datos");
    }

    // validacion contra .env
    if (
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
    ) {
        req.session.isLoggedIn = true;
        return res.redirect("/admin");
    }

    return res.status(401).send("Credenciales incorrectos");
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