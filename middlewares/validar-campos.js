const { validationResult } = require('express-validator');


const validarCampos = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }

    next();
}

const validateOrder = (req, next) => {
    const {operacion, sucursal, cantidad } = req.body;
    const message = { error: [] };
    if (!operacion) {
      message.error.push("La operacion es requerida");
    }
    if (typeof operacion != "string") {
      message.error.push("La operacion tiene un formato incorrecto");
    }
    if (operacion?.length <= 5 && !/^[a-z]+$/i.test(operacion)) {
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
    if (sucursal?.length <= 5 && !/^[a-z]+$/i.test(sucursal)) {
      message.error.push(
        "La sucursal tiene que ser de al menos 5 caracteres solo [a-z]"
      );
    }
    if (!cantidad) {
      message.error.push("La cantidad es requerida");
    }
    if (cantidad?.length < 0) {
      message.error.push("La cantidad no puede ser negativa");
    }
    if (message.error.length === 0 ){
      next()
    } else{
      return res.status(400).json(message)
    }
    
  };
  



module.exports = {
    validarCampos,
    validateOrder
}
