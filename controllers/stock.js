const { response } = require('express');
const { Stock } = require('../models');


const obtenerResumenProducto = async(req, res = response ) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, stock ] = await Promise.all([
        Stock.countDocuments(query),
        Stock.find(query)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre')
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        stock
    });
}

const obtenerunprodespecifico = async(req, res = response ) => {

    const { id } = req.params;
    const stock = await Stock.findById( id )
                            .populate('usuario', 'nombre')
                            .populate('categoria', 'nombre');

    
    console.log('stock response: ', stock)
    res.json( stock );

}

module.exports = {
   obtenerResumenProducto,
   obtenerunprodespecifico,
 }
 
