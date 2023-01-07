
const { response } = require("express");
const { Pagina } = require("../models");

// create page

const crearPagina = async (req, res = response) => {
  const { ...body } = req.body;
  const paginaDB = await Pagina.findOne({ titulo: body.titulo });

    if ( paginaDB ) {
        return res.status(400).json({
            msg: `La pagina  ${paginaDB.titulo }, ya existe`
        });
    }
//generar los datos a guardar
  const data ={
    ...body,
  };

  const pagina = new Pagina(data)
// Guardar en la base
  await pagina.save();
    res.status(201).json(pagina);
};

// get all page
const obtenerPaginas = async (req, res) => {

const { limite = 15, desde = 0 } = req.query;
const query = { estado: true };

const [ total, paginas ] = await Promise.all([
      Pagina.countDocuments(query),
      Pagina.find(query)
          .skip( Number( desde ) )
          .limit(Number( limite ))
  ]);
  res.json({
      total,
      paginas
  });
}

// get page


  const obtenerPagina = async (req, res) => {
   
    const { id } = req.params;
    const pagina = await Pagina.findById(id)
                               .populate('titulo');
    res.json({pagina});
    
};

// delete page

  const borrarPagina= async (req, res = response) => {

    const { id } = req.params;
    const paginaBorrada = await Pagina.findByIdAndUpdate({new: true});
    res.json({ paginaBorrada });

};

// Actualizar la pagina
const actualizarPagina = async(req, res) => {
 
  const { id } = req.params;
  const {...data} = req.body;
// Actualizando el usuario 
  data.usuario = req.usuario._id;

  const pagina = await Pagina.findByIdAndUpdate(id,data,{new: true});
   res.json({ pagina });
};

module.exports={
  crearPagina,
  obtenerPaginas,
  obtenerPagina,
  borrarPagina,
  actualizarPagina
}