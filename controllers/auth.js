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
/*
const kit = async (req, res) => {
  try {
    //obtener token
    const token = req.headers["x-token"];
    //extraer datos del token
    const decodificar = this.decodificar(token);
    //comprobar si el usuario existe
    const user = await User.findById(decodificar.id, { password: 0 });
    if (!user) {
      return res.status(404).json({ message: "Inicie Sesión" });
    } else {
      return res.send({ user: user });
    }
  } catch (error) {
    return res.status(401).json({ error });
  }
};
*/
/*
const logout = async(req, res = response) =>{
    try {
        const token = req.headers["x-token"];
        if (!token) return res.status(403).send({ message: "Inicie sesión" });
    
        res.status(200).send({ message: "Sesion cerrada" });
      } catch (error) {
        return res.status(500).send({ message: error });
      }
    }

*/
/*
const logout = async(req, res =response) => {
    const token = req.headers["x-token"];
    // Log user out of the application
    try {
       req.usuario.token = req.usuario.token.filter((token) => {
       return token.token != req.token
    })
    await req.user.save()
    res.send(token)
    } catch (error) {
       res.status(500).send(error)
    }
};

*/
const logout = async(req, res = response) => {

  res
  .clearCookie('jwt')
  .status(200)
  .json({'msj': "ok ok "});
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
/*
const decodificar = (token) => {
        try {
          if (!token) {
            return res.status(403).send({ message: "Inicie sesión" });
          }
          return (decodificar = jwt.verify(token, process.env.SECRET_KEY));
        } catch (error) {
          console.log(error);
          httpError(res, error);
        }
      };
      
};
*/

module.exports = {
    login,
    logout, 
    //kit
}
