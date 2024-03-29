const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet = async(req = request, res = response) => {

    const { limite = 6, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        usuarios
    });
}
const usuarioGetByID = async(req, res = response ) => {

    const { id } = req.params;
    const usuario = await Usuario.findById( id )
                                   .populate('usuario', 'nombre')
                                   .populate('categoria', 'nombre');

    res.json( usuario );

}

const usuariosPost = async(req, res = response) => {
    
    const { nombre, apellido, correo, password, rol, celular, edad, genero } = req.body;
    const usuario = new Usuario({ nombre,apellido, correo, password, rol, celular, edad, genero });
    
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario
    });
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id,password, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    // const usuario = await Usuario.findByIdAndUpdate( id, resto );
    await Usuario.findByIdAndUpdate( id, resto);
    const usuarioUpdate = await Usuario.findById(id)
    // console.log('user update:', usuario) 

    res.json( msg= "Datos actualizados");
    //res.json(usuarioUpdate)
}


const usuariosDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );
    //console.log('usuario', usuario);
    const usuarioAutenticado = req.usuario;

    //res.json(usuario,usuarioAutenticado);
    // res.status(usuario).json(usuarioAutenticado);
    res.status(217).json(
        smg = "El usuario ha sido deshabilitado");
}




module.exports = {
    usuariosGet,
    usuarioGetByID,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}