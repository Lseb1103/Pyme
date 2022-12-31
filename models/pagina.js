
const { Schema, model } = require('mongoose');

const PaginaSchema = Schema({
  header: {
    title:{
      type: String,
      required: [true, 'El titulo es obligatorio'],
    },
    logo:{
      type: String,
      required: [true, 'El logo es obligatorio'],
    },
    img:{
      type: String},

    about:{
      type: String
    },
    contactos:{
      type: String
    },
    },
  body: {
    img:{
      type: String,
    },
    descripcion: {
      type: String,
      required: true
    }
    
  },
  footer: {
    descripcion: {
      type: String,
      require: true,
    },
    contactos: {
      type: String,
      require: true,
    }
  },
  redes: {
    type: String,
    required: true
  },
  
});

module.exports = model('Pagina', PaginaSchema);

/*
const mongoose = require("mongoose");

const paginaSchema = mongoose.Schema({
  header: {
    title:String,
    logo:String,
    img:String,
    about:String,
    contactos:String,
 
  },
  body: {
    img: String,
  
    descripcion: String,

  },
  footer: {
    descripcion: String,

    contactos: String,

  },
  redes: {
    tipo: String,

  },
  
});

module.exports = mongoose.model('Pagina', paginaSchema);
*/