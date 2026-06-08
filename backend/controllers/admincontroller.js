const bcrypt = require("bcrypt");

// vista login
exports.getLogin = (req, res) => {
    res.render("login");
};

// procesar login
exports.postLogin = async (req, res) => {
    try {

        const { email, password } = req.body;

        // validación básica
        if (!email || !password) {
            return res.status(400).send("Faltan datos");
        }

        // verificar email
        if (email !== process.env.ADMIN_EMAIL) {
            return res.status(401)
            .send("Credenciales incorrectas");
        }

        // comparar contraseña con hash
        const isMatch = await bcrypt.compare(
            password,
            process.env.ADMIN_PASSWORD_HASH
        );

        // contraseña incorrecta
        if (!isMatch) {
            return res.status(401)
            .send("Credenciales incorrectas");
        }

        // crear sesión
        req.session.isLoggedIn = true;

        return res.redirect("/admin");

    } catch (error) {

        console.error(error);

        return res.status(500)
        .send("Error iniciando sesión");
    }
};

// cerrar sesión
exports.logout = (req, res) => {

    req.session.destroy((error) => {

        if (error) {
            return res.status(500)
            .send("Error cerrando sesión");
        }

        res.redirect("/login");

    });

};