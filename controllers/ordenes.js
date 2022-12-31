const { response } = require('express');
const { Producto, Orden } = require('../models');
//const { Stock } = require('../models');


const crearOrden = async(req, res = response) =>{

    const { estado, usuario, ...data } = req.body;

    //const {id} = req.params;
    

    const producto = await Producto.findById(data.id);
    if ( !producto ) {
        return res.status(404).json({
            msg: `El producto no se encontro`
        });
    }
    producto.cantidad -= data.cantidad;
    await producto.save();
    res.json(msg ="ok")


    data.producto = req.usuario.cantidad;

    const productoActual = await Orden.findByIdAndUpdate(cantidad, { new: true });
    if ( productoActual) {
    res.json (msg = "okey")
}
};

module.exports = {
    crearOrden,
    /*obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    borrarProducto*/
}