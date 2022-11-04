const express = require("express");
//const perfilesSchema = require("../models/perfiles");
const perfil = require("../controllers/perfiles.controller.js");
const router = express.Router();

// create user
router.post("/perfiles", perfil.post);

// get all users
router.get("/perfiles", perfil.get);

// get a user
router.get("/perfiles/:id", perfil.getid);

// delete a user
router.delete("/perfiles/:id",perfil.delete);

// update a user
router.put("/perfiles/:id", perfil.put);

module.exports = router;