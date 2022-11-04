const express = require("express");
const reporte = require("../models/reporteproductos");
const repor = require("../controllers/reporte.controller.js");

const router = express.Router();
//db.createCollection('reporte');

router.post("/reporte", repor.post);

  reporte.aggregate(
    [
       {
          $project: {
              productos: { $objectToArray: "$producto" }
          }
       }
    ]
 )

  module.exports = router;