const express = require("express");
const reporte = require("../models/reporteproductos");
 

//db.createCollection('reporte');

exports.post = (req, res) => {
    const user = reporte(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

  reporte.aggregate(
    [
       {
          $project: {
              productos: { $objectToArray: "$producto" }
          }
       }
    ]
 )
