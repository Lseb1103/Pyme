const express = require("express");
//const paginaSchema = require("../models/paginas");
const pagina = require("../controllers/pagina.controller.js");
const router = express.Router();

// create page
router.post("/paginas]", pagina.post);

// get all page
router.get("/paginas", pagina.get);

// get page
router.get("/paginas/:id",pagina.getid);

// delete page
router.delete("/paginas/:id", pagina.delete);

// update page
router.put("/paginas/:id", pagina.put);

module.exports = router;