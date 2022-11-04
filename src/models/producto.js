const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  codigo: {
    type: Number,
    required: true
  },
   descripcion: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Producto', productoSchema);