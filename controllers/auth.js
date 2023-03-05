const { response } = require('express');
const bcryptjs = require('bcryptjs')


const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');



const login = async(req, res = response) => {

  const { correo, password } = req.body;
  try {
    
      // Verificar si el email existe
      const usuario = await Usuario.findOne({ correo });
      if ( !usuario ) {
          return res.status(400).json({
              msg: 'Usuario / Password no son correctos - correo'
          });
      }

      // SI el usuario está activo
      if ( !usuario.estado ) {
          return res.status(400).json({
              msg: 'Usuario / Password no son correctos - estado: false'
          });
      }

      // Verificar la contraseña
      const validPassword = bcryptjs.compareSync( password, usuario.password );
      if ( !validPassword ) {
          return res.status(400).json({
              msg: 'Usuario / Password no son correctos - password'
          });
      }

      // Generar el JWT
      const token = await generarJWT( usuario.id );
      
      //
      res.cookie('jwt', token);
      res.json({
          usuario
      })

  } catch (error) {
      console.log(error)
      res.status(500).json({
          msg: 'Hable con el administrador'
      });
  }   

}

const logout = async(req, res = response) => {

  res
  .clearCookie('jwt')
  .status(200)
  .json({'msj': "Logout correcto "});
  //const authHeader = req.headers["x-token"];
  //const newtoken = await generarJWT("abcd", expiredtime = 1);
  //res.send({ newtoken });
  /*
  jwt.sign(authHeader, "", { expiresIn: 1 } , (logout, err) => {
    if (logout) {
       res.send({msg : 'Has sido desconectado' });
    } else {
       res.send({msg:'Error'});
    };
});*/

};

const changePassword = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password,  } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }
    // const usuario = await Usuario.findByIdAndUpdate( id, resto );
    await Usuario.findByIdAndUpdate( id, password);
    const usuarioUpdate = await Usuario.findById(id)
    // console.log('user update:', usuario) 

    res.json( msg= "Datos actualizados");
    //res.json(usuarioUpdate)
}

module.exports = {
    login,
    logout, 
    changePassword
}
