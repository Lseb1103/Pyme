
const { response } = require("express");
const { Pagina } = require("../models");
const PaginaSchema = require("../models/pagina");


// create page
const paginaPost = async (req, res = response) => {
  const paginaDB = await Categoria.findOne({ titulo });

    if ( paginaDB ) {
        return res.status(400).json({
            msg: `La pagina ${ paginaDB.titulo }, ya existe`
        });
    }
// Generar datos al guardar
  const data = {
    
    header,
    body,
    footer,
    redes,
  }
  const pagina = new Pagina(data);
  await pagina.save()
    res.status(201).json(pagina)
};

// get all page
const paginaGet  = async (req, res = response) => {
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [ total, paginas ] = await Promise.all([
      Pagina.countDocuments(query),
      Pagina.find(query)
          .populate('titulo')
          .skip( Number( desde ) )
          .limit(Number( limite ))
  ]);

  res.json({
      total,
      paginas
  });
}

// get page
const paginaGetid = async (req, res) => {
  const { id } = req.params;
  const pagina = await Pagina.findById(id)
    .populate('titulo');
    res.json({ pagina});
};

// delete page
const paginaDelete= async (req, res = response) => {
  const { id } = req.params;
  const paginaBorrada = await Pagina.findByIdAndUpdate(id,data,{new: true});
   res.json({ paginaBorrada });
};

// update page
const paginaPut = async(req, res) => {
  const { id } = req.params;
  const {usuario, ...data} = req.body;

  data.usuario = req.usuario._id;

  const pagina = await Pagina.findByIdAndUpdate(id,data,{new: true});
   res.json({ pagina });
};

module.exports={
  paginaPost,
  paginaGet,
  paginaGetid,
  paginaDelete,
  paginaPut
}

/*
const paginaSchema = require("../models/pagina.js");

// create page
const paginaPost = async (req, res) => {
  const pagina = PaginaSchema(req.body);
  await Pagina
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
  paginaSchema
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

module.exports={
  paginaPost,
  paginaGet,
  paginaGetid,
  paginaDelete,
  paginaPut
}

*/