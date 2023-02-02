const { validationResult } = require('express-validator');


const validarCampos = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }

    next();
}

const validateOrder = (req,res, next) => {
    const {operacion, sucursal, cantidad } = req.body;
    const message = { error: [] };
    const okey = {resultado:[]}
    if (!operacion) {
      message.error.push("La operacion es requerida");
    }
    if (typeof operacion != "string") {
      message.error.push("La operacion tiene un formato incorrecto");
    }
    if (operacion?.length < 5 || !/^[A-z]+$/.test(operacion)) {
      message.error.push(
        "La operacion tiene que ser de al menos 5 caracteres solo [a-z]"
      );
    }
    if (!sucursal) {
      message.error.push("La sucursal es requerida");
    }
    if (typeof sucursal != "string") {
      message.error.push("La sucursal tiene un formato incorrecto");
    }
    if (sucursal?.length < 5 || !/^[A-z]+$/.test(sucursal)) {
      message.error.push(
        "La sucursal tiene que ser de al menos 5 caracteres solo [a-z]"
      );
    }
    if (!cantidad) {
      message.error.push("La cantidad es requerida");
    }
    if (cantidad <= 0) {
      message.error.push("La cantidad no puede ser negativa");
    }
    if (message.error.length === 0 ){
      okey.resultado.push("Operacion realizada con exito");
      return res.status(200).json(okey);
    } else{
      return res.status(400).json(message)
    }
    
  };

  exports.validate = (req) => {
    const { nombre, apellido, correo, password, celular } = req.body;
    const message = { error: [] };
    if (!nombre) {
      message.error.push("El nombre es requerido");
    }
    if (typeof nombre != "string") {
      message.error.push("El nombre tiene un formato incorrecto");
    }
    if (nombre?.length <= 5 && !/^[a-z]+$/.test(nombre)) {
      message.error.push(
        "El nombre tiene que ser de al menos 5 caracteres solo [a-z]"
      );
    }
    if (!apellido) {
      message.error.push("El apellido es requerido");
    }
    if (typeof apellido != "string") {
      message.error.push("El apellido tiene un formato incorrecto");
    }
    if (apellido?.length <= 5 && !/^[a-z]+$/.test(apellido)) {
      message.error.push(
        "El apellido tiene que ser de al menos 5 caracteres solo [a-z]"
      );
    }
    if (!correo) {
      message.error.push("El correo es requerido");
    }
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/.test(correo)){
      console.log("La dirección de email " + correo + " es correcta.");
    } else {
      message.error.push("La dirección de email es incorrecta.");
    }
    if (!password) {
      message.error.push("La contraseña es requerida");
    }
    if (password?.length < 8) {
      message.error.push("La contraseña tiene que ser de al menos 8 caracteres");
    }
    if (!celular) {
      message.error.push("El celular es requerido");
    }
    if (celular?.length < 10) {
      message.error.push("El numero celular tiene que ser de al menos 10 caracteres");
    }// si se pasa no lo detecta
    if (message?.error?.length != 0) {
      return message;
    }else {
      return null;
    }
  };
  
  exports.validateLogin = (req) => {
    const { email, password } = req.body;
    const messages = { error: [] };
  
    if (!email) {
      messages.error.push("El correo es requerido");
    }
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)){
      console.log("La dirección de email " + email + " es correcta.");
    } else {
      messages.error.push("La dirección de email es incorrecta.");
    }
  
    if (!password) {
      messages.error.push("La contraseña es requerida");
    }
    if (password?.length < 8) {
      messages.error.push("La contraseña tiene que ser de al menos 8 caracteres");
    }
    if (messages?.error?.length != 0) {
      return messages;
    }else {
      return null;
    }
  };

  exports.validate = (req) => {
    const { title, description } = req.body;
    const message = { error: [] };
    if (!title) {
      message.error.push("El titulo es requerido");
    }
    if (!description) {
      message.error.push("La descripcion es requerida");
    }
    if (typeof title !== "string") {
      message.error.push("El titulo ingresado es incorrecto");
    }
    if (typeof description !== "string") {
      message.error.push("La descripcion ingresada es incorrecta");
    }
    if (message?.error?.length !== 0) {
      if (req.file?.filename) {
        unlink(path.resolve("./public/uploads/" + req.file.filename));
      }
      return message;
    }
  };
  
  exports.validateUpdate = (req, res, next) => {
    const { title, description } = req.body;
    const id = req.params.id;
    const message = { error: [] };
  
    if (id) {
      if (id.length < 24) {
        message.error.push("El id es incorrecto");
      }
    } else {
      message.error.push("El id es incorrecto");
    }
  
    if (title) {
      if (typeof title !== "string") {
        message.error.push("El titulo ingresado es incorrecto");
      }
    }
    if (description) {
      if (typeof description !== "string") {
        message.error.push("La descripcion ingresada es incorrecta");
      }
    }
  
    if (message?.error?.length !== 0) {
      if (req.file?.filename) {
        unlink(path.resolve("./public/uploads/" + req.file.filename));
      }
      return message;
    }
  };
  exports.validate = (req) => {
    const { email } = req.body;
    const messages = { error: [] };
  
    if (!email) {
      messages.error.push("El correo es requerido");
    }
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)){
      console.log("La dirección de email " + email + " es correcta.");
    } else {
      messages.error.push("La dirección de email es incorrecta.");
    }
  
    if (messages?.error?.length != 0) {
      return messages;
    }else {
      return null;
    }
};

exports.validatePassword = (req) => {
    const {  password } = req.body;
    const message = { error: [] };
  
    if (!password) {
      message.error.push("La contraseña es requerida");
    }
    if (password?.length < 8) {
      message.error.push("La contraseña tiene que ser de al menos 8 caracteres");
    }
    if (message?.error?.length != 0) {
      return message;
    }else {
      return null;
    }
  };
  



module.exports = {
    validarCampos,
    validateOrder
}
