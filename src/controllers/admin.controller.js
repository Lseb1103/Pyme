const adminSchema = require("../models/admin");


// create admin
exports.post=(req, res) => {
  const admin = adminSchema(req.body);
  admin
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get all admin
exports.get= (req, res) => {
  adminSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get a admin
exports.getid= (req, res) => {
  const { id } = req.params;
  adminSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// delete a admin
exports.delete= (req, res) => {
  const { id } = req.params;
  adminSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// update a admin
exports.put= (req, res) => {
  const { id } = req.params;
  const { nombre, direccion, telefono, foto, email, edad, genero,password } = req.body;
  adminSchema
    .updateOne({ _id: id }, { $set: { nombre, direccion, telefono, foto, email, edad, genero, password } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

