var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var producto = require("./producto")

 

const reporteSchema = mongoose.Schema({
    titulo: {
      type: String,
      required: true,
    },
    producto: { type: Schema.Types.ObjectId, ref: "Producto" }
  });

module.exports = mongoose.model("Reporte", reporteSchema);