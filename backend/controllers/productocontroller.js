// traemos el modelo del producto
const Producto = require("../models/producto");


//obtiene todos los productos y renderiza el panel admin
exports.getAdmin = async (req, res) => {
    const productos = await Producto.find();
    res.render("admin", {productos});
};

// crear producto
exports.crearProducto = async (req, res) => {
    try {
        await Producto.create(req.body);
        res.redirect("/admin");
    } catch (error) {
        res.send("Error creando producto");
}
};

// vista editar
exports.vistaeditar = async (req, res) => {
    const producto =await Producto.findById(req.params.id);
    res.render("editar", {producto});
};

// editar
exports.editarproducto = async (req, res) => {
    try {
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/admin");
    } catch (error) {
        res.send("Error editando producto");
    }
};

// eliminar 
exports.eliminarproducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.redirect("/admin");
    } catch (error){
        res.send("error eliminando producto");
    }
};
