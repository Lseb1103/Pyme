//const { Producto,Stock } = require('../models');

exports.validate = (req) => {
  const { nombre, apellido, correo, password, celular } = req.body;
  const message = { error: [] };
  if (!nombre) {
    message.error.push("El nombre es requerido");
  }
  if (typeof nombre != "string") {
    message.error.push("El nombre tiene un formato incorrecto");
  }
  if (nombre?.length <= 5 && !/^[a-z]+$/i.test(nombre)) {
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
  if (apellido?.length <= 5 && !/^[a-z]+$/i.test(apellido)) {
    message.error.push(
      "El apellido tiene que ser de al menos 5 caracteres solo [a-z]"
    );
  }
  if (!correo) {
    message.error.push("El correo es requerido");
  }
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo)){
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

exports.validateOrder = (req) => {
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
 
};
