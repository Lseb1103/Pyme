const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true

  },
  edad: {
    type: Number,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  }

});

module.exports = mongoose.model('Admin', adminSchema);