//login admin
exports.getLogin = (req, res) => {
    res.render("login");
};

// enviar datos del admin
exports.postLogin = (req, res) => {
    const { email, password } = req.body;

    if (email === "marce@" && password === "1234") {
        req.session.isLoggedIn = true;
        return res.redirect("/admin");
    }

    res.send("Datos incorrectos");
};

// cerrar sesion admin
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
};