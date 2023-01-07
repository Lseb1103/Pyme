const { response } = require('express');
const { Producto, Orden, Stock } = require('../models');
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

//  Acciones para modificar el stock de productos
    let valor = data.cantidad
    valor = parseInt(valor)

    if(data.operacion === "Ingreso") producto.cantidad =+ valor
    else if(data.operacion === "Salida") producto.cantidad === 0 ? res.json(msg = 'No hay producto') : producto.cantidad -= valor
    
    //producto.cantidad -= data.cantidad;
    await producto.save();
    res.json(msg ="ok")

    const productoAfter = await Producto.findById(data.id);
    let newValue = productoAfter.cantidad


    //const stock = await Stock
    
  //  await 

//     data.producto = req.usuario.cantidad;

//     const productoActual = await Orden.findByIdAndUpdate(data.cantidad, { new: true });
//     if ( productoActual) {
//     res.json (msg = "okey")
// }
};

module.exports = {
    crearOrden,
    /*obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    borrarProducto*/
}