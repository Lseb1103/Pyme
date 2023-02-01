const { Schema, model } = require('mongoose');

const PaginaSchema = Schema(
  {
    title:{
              type: String,
              //required: [true, 'El titulo es obligatorio'],
          },
    estado:{
            type: Boolean,
            default: true,
            required: true
        },
    logo:{
              type: String,
          },
    imgTitle:{
              type: String,
          },
    about:{
              type: String,
          },
    contactos:{
              type: String,
          },
    imgBody:{
              type: String,
          },
    descripcionBody: {
              type: String,
              //required: true
          },
    descripcionFooter: {
              type: String,
              //require: true,
          },
    contactos: {
              type: String,
              //require: true,
          },
    redes: {
              type: String,
              // required: true
          },
}
);

module.exports = model( 'Pagina', PaginaSchema );

/*
const { Schema, model } = require('mongoose');

const PaginaSchema = Schema(
  {
  header: {
    title:String,
    logo:String,
    img:String,
    about:String,
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


module.exports = model( 'Pagina', PaginaSchema );
*/

/*
{
    title:{
              type: String,
              //required: [true, 'El titulo es obligatorio'],
          },
    logo:{
              type: String,
          },
    imgTitle:{
              type: String
          },
    about:{
              type: String
          },
    contactos:{
              type: String
    imgBody:{
              type: String,
          },
    descripcionBody: {
              type: String,
              //required: true
          },
    descripcionFooter: {
              type: String,
              //require: true,
          },
    contactos: {
              type: String,
              //require: true,
    }
    redes: {
              type: String,
              // required: true
            },
}
*/