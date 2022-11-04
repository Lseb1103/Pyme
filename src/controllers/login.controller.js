const User = require('../models/user')
const Joi = require('@hapi/joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

// LOGIN
exports.post= async (req, res) => {
    // Validaciones de login
    const { error } = schemaLogin.validate(req.body)
    if(error) return res.status(400).json({error: error.details[0].message})
    
    // Validaciond e existencia
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).json({error: 'Usuario no encontrado'})

    // Validacion de password en la base de datos
   // const validPassword = await User.findOne(req.body.password, user.password)
   // if(!validPassword) return res.status(400).json({error: 'Constraseña invalida'})

   const token = jwt.sign({
    name: user.nombre,
    id: user._id
}, process.env.TOKEN_SECRET)

// Colocando el token en el header y el cuerpo de la respuesta
    res.header('auth-token', token).json({
    error: null,
    data: { token },
    message: 'Bienvenido'
})
};


 