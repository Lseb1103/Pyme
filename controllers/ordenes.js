const { response } = require('express');
//const { read, dash } = require('pdfkit');
const { Producto, Orden, Stock, Usuario } = require('../models');
const usuario = require('../models/usuario');
//console.log('order')


const crearOrden = async (req, res = response) =>{
    //console.log( 'crearOrden')

    const {operacion, usuario, ...data } = req.body;
    
    const producto = await Producto.findById(data.id);
    if ( !producto ) {
        return res.status(404).json({
            msg: `El producto no se encontro`
        });
    }

//  Acciones para modificar el stock de productos

    let valor = data.cantidad
    let cantidadActualProducto = producto.cantidad;
    // valor = parseInt(valor)

    //console.log('cantidad: ', data.cantidad)

    if(operacion === "Ingreso") {
        //console.log(operacion)
        producto.cantidad += valor,
        await producto.save();

        const document = {
            productoNombre: producto.nombre,
            producto: producto.id,
            cantidad: valor,
            cantidadFinalProducto: producto.cantidad,
            usuario: req.usuario._id,
            operacion: operacion,
            sucursal:  data.sucursal
        }

        const orden = new Orden(document)
        await orden.save()
        res.status(201).json(orden)

        // res.status(201).json(producto);
    }
    
        
     else if(operacion === "Salida") {

        
        if (cantidadActualProducto - valor < 0) {

            return res.status(200).json(msg = 'La cantidad de salida excede el valor de stock')

         } else {
            
         
         producto.cantidad -= valor
/*
        cantidadActualProducto - valor < 0
        ? res.json(msg = 'La cantidad de salida excede el valor de stock')
        //
        : producto.cantidad -= valor
        
*/
        await producto.save();

        const document = {
            productoNombre: producto.nombre,
            producto: producto.id,
            cantidad: valor,
            cantidadFinalProducto: producto.cantidad,
            usuario: req.usuario._id,
            operacion: operacion,
            sucursal:  data.sucursal
        }

        const orden = new Orden(document)
        await orden.save()
        res.status(201).json(orden)
         }
    
    } 
    // res.json(msg ="ok")

    // const productoAfter = await Producto.findById(data.id);
    // let newValue = productoAfter.cantidad


    //const stock = await Stock
    
  //  await 

//     data.producto = req.usuario.cantidad;

//     const productoActual = await Orden.findByIdAndUpdate(data.cantidad, { new: true });
//     if ( productoActual) {
//     res.json (msg = "okey")
// }


};

const obtenerOrdenesSalida = async(req, res = response ) => {

    // const { limite = 5, desde = 0 } = req.query;
    const query = {operacion: "Salida" };

    const [ total, ordenes] = await Promise.all([
        Orden.countDocuments(query),
        Orden.find(query)
            .populate('usuario', 'nombre')
            // .populate('categoria', 'nombre')
            // .skip( Number( desde ) )
            // .limit(Number( limite ))
    ]);
    res.status(201).json(
        smg = " La operacion se ha realizado exitosamente" 
    )

}

const obtenerOrdenesIngreso = async(req, res = response ) => {

    // const { limite = 5, desde = 0 } = req.query;
    const query = {operacion: "Ingreso" };

    const [ total, ordenes] = await Promise.all([
        Orden.countDocuments(query),
        Orden.find(query)
            .populate('usuario', 'nombre')
            // .populate('categoria', 'nombre')
            // .skip( Number( desde ) )
            // .limit(Number( limite ))
    ]);
    res.status(201).json({
        total,
        ordenes
    })

}

module.exports = {
    crearOrden,
    obtenerOrdenesSalida,
    obtenerOrdenesIngreso
    /*obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    borrarProducto*/
}