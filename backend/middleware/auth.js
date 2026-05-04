// middleware para proteger rutas privadas
//redirige al login si el usuario no esta autenticado
module.exports = function (req, res, next) {
    if (!req.session.isLoggedIn) {
        return res.redirect("/login");
    }
    next();
};