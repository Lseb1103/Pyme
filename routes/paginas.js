
const { Router } = require('express');
const { check } = require('express-validator');
//const paginaSchema = require("../models/paginas");

const { paginaGet,
        paginaGetid,
        paginaPut,
        paginaPost,
        paginaDelete } = require('../controllers/paginas.js');
        
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const {
    validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole

}=require('../middlewares');
const router = Router();

    // create page
router.post("/paginas",[
    tieneRole('USER_ADMIN','USER_ROLE','USER_BRANCH_ROLE '),
], paginaPost);

// get all page
router.get("/paginas",[
    tieneRole('USER_ADMIN','USER_ROLE','USER_BRANCH_ROLE '),
], paginaGet);

// get page
router.get("/paginas/:id",[
    tieneRole('USER_ADMIN','USER_ROLE','USER_BRANCH_ROLE '),
],paginaGetid);

// delete page
router.delete("/paginas/:id",[
    tieneRole('USER_ADMIN','USER_ROLE','USER_BRANCH_ROLE '),
], paginaDelete);

// update page
router.put("/paginas/:id",[
    tieneRole('USER_ADMIN','USER_ROLE','USER_BRANCH_ROLE '),
], paginaPut);

module.exports = router;

/*
const express = require("express");
//const paginaSchema = require("../models/paginas");
const pagina = require("../controllers/paginas");
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
*/