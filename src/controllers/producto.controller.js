const express = require("express");
const productoSchema = require("../models/producto");


// create user
exports.post = (req, res) => {
  const produ = productoSchema(req.body);
  produ
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
exports.getid = (req, res) => {
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
exports.put = (req, res) => {
  const { id } = req.params;
  const { name, cantidad, precio } = req.body;
  productoSchema
    .updateOne({ _id: id }, { $set: { name, cantidad, precio } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

