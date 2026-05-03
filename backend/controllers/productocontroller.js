const Producto = require("../models/producto");

// Admin

exports.getAdmin = async (req, res) => {
    if (!req.session.isLoggedIn) {
        return res.redirect("/login");
    }

    const productos = await Producto.find();
    res.render("admin", {productos});
};

// crear producto
exports.crearProducto = async (req, res) => {
    await Producto.create(req.body);
    res.redirect("/admin");
};

// vista editar
exports.vistaeditar = async (req, res) => {
    const producto =await Producto.findById(req.params.id);
    res.render("editar", {producto});
};

// editar
exports.editarproducto = async (req, res) => {
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/admin");
};

// eliminar 
exports.eliminarproducto = async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.redirect("/admin");
};
