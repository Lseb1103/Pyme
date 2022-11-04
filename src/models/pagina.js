const mongoose = require("mongoose");

const paginaSchema = mongoose.Schema({
  header: {
    title:String,
    required: true,
    logo:String,
    required: true,
    img:String,
    about:String,
    required: true,
    contactos:String,
    login:any, 
  },
  body: {
    img: String,
  
    descripcion: String,
    required: true
  },
  footer: {
    descripcion: String,
    required: true,
    contactos: String,
    required: true
  },
  redes: {
    tipo: String,
    required: true
  },
  
});

module.exports = mongoose.model('Pagina', productoSchema);