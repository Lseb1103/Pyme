const express = require("express");
const Reporte = require("../models/reporteProductos");
const Producto = require("../models/producto");
 

//db.createCollection('reporte');


let listar = (req, res) => {
   Venta.find({})
       .populate("productos.productos")
       .exec((err, data) => {
           res.json(data);
       });
}

module.exports = {
   
   listar
}
