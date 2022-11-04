const mongoose = require("mongoose");

const perfilesSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model('Perfiles', productoSchema);