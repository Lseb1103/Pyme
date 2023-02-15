const { response } = require('express');
const { Producto,Stock } = require('../models');



const obtenerProductos = async(req, res = response ) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, productos ] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre')
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        productos
    });
}

const obtenerProducto = async(req, res = response ) => {

    const { id } = req.params;
    const producto = await Producto.findById( id )
                                   .populate('usuario', 'nombre')
                                   .populate('categoria', 'nombre');

    res.json( producto );

}

const crearProducto = async(req, res = response ) => {

    const { estado, usuario, ...body } = req.body;

    const productoDB = await Producto.findOne({ nombre: body.nombre.toUpperCase()})
    console.log('hii',productoDB)
    if ( productoDB ) {
        return res.status(400).json({
            msg: `El producto ${ productoDB.nombre }, ya existe`
        });
    }

    // Generando los datos a guardar
    const data = {
        ...body,
        nombre: body.nombre.toUpperCase(),
        usuario: req.usuario?._id
    }

    const producto = new Producto( data );
    // Guardar DB
    await producto.save();
    res.status(201).json(producto);

    //crear nuevo squema stok
    //generar datos de la tabla stok
    //guardar en la collecccion stok
    
    const stock = new Stock(data);
    await stock.save();
    //res.status(201).json(stock);

}

const actualizarProducto = async( req, res = response ) => {

    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    if( data.nombre ) {
        data.nombre  = data.nombre.toUpperCase();
    }

    data.usuario = req.usuario._id;

    const producto = await Producto.findByIdAndUpdate(id, data, { new: true });
//
    const stock = await Stock.findByIdAndUpdate(id, data, { new: true }); 

    res.json( smg = "El producto ha sido actualizado" );
    
    //res.json( stock );

}

const borrarProducto = async(req, res = response ) => {

    const { id } = req.params;
    const productoBorrado = await Producto.findByIdAndUpdate( id, { estado: false }, {new: true });
///
    //const stockBorrado = await Stock.findByIdAndUpdate( id, { estado: false }, {new: true });
    //await stockBorrado.save();
/// res.status(217).json(
    res.json( smg = "El producto ha sido deshabilitado" );
    //res.json( stockBorrado);
}


const obtenercategoria = async(req, res = response ) => {
    //const cat ={ msg : 'hi'}
    const { categoria } = req.query;
    const cat = await Producto.find({categoria: { $eq: categoria},
    })
                                   .populate('usuario', 'nombre')
                                   .populate('categoria', 'nombre');

    res.json( cat );

}


module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    borrarProducto,
    obtenercategoria
}