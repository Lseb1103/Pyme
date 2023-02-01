const { response } = require('express');
//const { read, dash } = require('pdfkit');
const { Notificacion, Usuario } = require('../models');
const notificacion = require('../models/notificacion');

const crearNotificacion = async(req, res = response) =>{
    //destructuracion del body
    const {notificacion, usuario ,...data } = req.body;
    //nuevo documento para la colleccion
        const document = {
            notificacion : notificacion,
            usuario: req.usuario._id,
            rol: req.usuario.rol,
            para:  data.para
        }
        //intancia del modelo noificacion 
        const sms = new Notificacion(document)
        await sms.save()
        res.status(201).json(sms)

}

const obtenerNotificacion = async(req, res = response ) => {

    // const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, mensaje] = await Promise.all([
        Notificacion.countDocuments(query),
        Notificacion.find(query)
            .populate('usuario', 'nombre')
            //.populate('usuario','rol' )
            .populate('para')
            // .skip( Number( desde ) )
            // .limit(Number( limite ))
    ]);
    res.status(201).json({
        total,
        mensaje
    })

}

const actualizarNotificacion = async( req, res = response ) => {

    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    if( data.notificacion ) {
        data.notificacion  = data.notificacion.toUpperCase();
    }

    data.usuario = req.usuario._id;

    const notificacionActual = await Producto.findByIdAndUpdate(id, data, { new: true });
//
    const noti = await Notificacion.findByIdAndUpdate(id, data, { new: true }); 
    
    await noti.save();
    res.json( notificacionActual );

}

const borrarNotificacion = async(req, res = response ) => {

    const { id } = req.params;
    const notificacionBorrada = await Producto.findByIdAndUpdate( id, { estado: false }, {new: true });
///
    const notiBorrada = await Stock.findByIdAndUpdate( id, { estado: false }, {new: true });
    await notiBorrada.save();
///
    res.json( notificacionBorrada );
    //res.json( stockBorrado);
}


const filtroNoti = async(req, res = response ) => {
    //const cat ={ msg : 'hi'}
    const { para } = req.query;
    const fNoti = await Notificacion.find({notificacion: { $eq: para}})
                                   .populate('usuario', 'nombre')
                                   //.populate('categoria', 'nombre');

    res.json( fNoti );

}

module.exports = {
    obtenerNotificacion,
    crearNotificacion,
    actualizarNotificacion,
    borrarNotificacion,
    filtroNoti

}