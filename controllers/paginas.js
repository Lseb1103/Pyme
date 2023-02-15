
const { response } = require("express");
const { Pagina } = require("../models");

// Create Home Page

const postPage = async (req, res = response) => {
  const { ...body } = req.body;
  const paginaDB = await Pagina.findOne({ title: body.title });

    if ( paginaDB ) {
        return res.status(400).json({
            msg: `La pagina  ${paginaDB.title }, ya existe`
        });
    }
//generar los datos a guardar
  const data ={
    ...body,
  };

  const pagina = new Pagina(data)
// Guardar en la base
  await pagina.save();
  res.status(200).json(pagina);
};

// Get all pages
const getAllPages = async (req, res) => {

const { limite = 5, desde = 0 } = req.query;
const query = { estado: true };

const [ total, paginas ] = await Promise.all([
      Pagina.countDocuments(query),
      Pagina.find(query)
          .skip( Number( desde ) )
          .limit(Number( limite ))
  ]);
  res.status(200).json({
      total,
      paginas
  });
}

// Get page


  const getPage = async (req, res) => {
   
    const { id } = req.params;
    const pagina = await Pagina.findById(id)
                               .populate('titulo');
    res.json({pagina});
    
};

// Delete page

  const deletePage= async (req, res = response) => {

    const { id } = req.params;
    const paginaBorrada = await Pagina.findByIdAndDelete(id);
    res.json( smg = "El pagina se ha desabilitado " );

};

// Refresh page
const putPage = async(req, res) => {
 
  const { id } = req.params;
  const {_id, ...data} = req.body;

  await Pagina.findByIdAndUpdate( id, data);
  const usuarioUpdate = await Pagina.findById(id)

   res.json({ usuarioUpdate });
};

module.exports={
  postPage,
  getAllPages,
  getPage,
  deletePage,
  putPage
}