const paginaSchema = require("../models/paginas");



// create page
exports.post = (req, res) => {
  const pagina = productoSchema(req.body);
  pagina
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get all page
exports.get = (req, res) => {
  paginaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get page
exports.getid = (req, res) => {
  const { id } = req.params;
  productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// delete page
exports.delete= (req, res) => {
  const { id } = req.params;
  paginaSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// update page
exports.put=(req, res) => {
  const { id } = req.params;
  const { header, body ,footer} = req.body;
  paginaSchema
    .updateOne({ _id: id }, { $set: { header, body, footer } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

