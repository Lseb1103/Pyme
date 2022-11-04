const express = require("express");
const perfilesSchema = require("../models/perfiles");


// create user
exports.post=  (req, res) => {
  const perfil = productoSchema(req.body);
  perfil
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get all users
exports.get = (req, res) => {
  productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get a user
exports.getid= (req, res) => {
  const { id } = req.params;
  productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// delete a user
exports.delete = (req, res) => {
  const { id } = req.params;
  productoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// update a user
exports.put= (req, res) => {
  const { id } = req.params;
  const { nombre, estado } = req.body;
  perfilesSchema
    .updateOne({ _id: id }, { $set: { nombre, estado } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

 