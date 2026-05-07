// traemos el modelo del producto
const Producto = require("../models/producto");


//obtiene todos los productos y renderiza el panel admin
exports.getAdmin = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).render("admin", { productos });
    } catch (error) {
        res.status(500).send("Error cargando productos");
    }
};

// crear producto
exports.crearProducto = async (req, res) => {
    try {
        await Producto.create(req.body);
        res.redirect("/admin");
    } catch (error) {
        res.status(500).send("Error creando producto");
}
};

// vista editar
exports.vistaeditar = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);

        if (!producto) {
            return res.status(404).send("Producto no encontrado");
        }

        res.status(200).render("editar", { producto });
    } catch (error) {
        res.status(500).send("Error cargando producto");
    }
};

// editar
exports.editarproducto = async (req, res) => {
const { nombre, precio, descripcion } = req.body;
    try {
        const precioNumero = Number(precio);

        if (!nombre || nombre.trim() === "") {
            return res.status(400).send("Nombre obligatorio");
        }

        if (isNaN(precioNumero) || precioNumero <= 0) {
            return res.status(400).send("Precio inválido");
        }

        await Producto.findByIdAndUpdate(req.params.id, {
            nombre: nombre.trim(),
            precio: precioNumero,
            descripcion: descripcion?.trim()
        }, { runValidators: true });

        res.redirect("/admin");

    } catch (error) {
        res.status(500).send("Error editando producto");
    }
};

// eliminar 
exports.eliminarproducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.redirect("/admin");
    } catch (error){
        res.status(500).send("error eliminando producto");
    }
};

// agregar imagenes
exports.crearProducto = async (req, res) => {
    try {
        await Producto.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            imagen: req.file ? req.file.filename : null
        });

        res.redirect("/admin");
    } catch (error) {
        res.status(500).send("Error creando producto");
    }
};
