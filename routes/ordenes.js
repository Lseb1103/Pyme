const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos, esAdminRole,tieneRole } = require('../middlewares');

const { crearOrden,} = require('../controllers/ordenes');

const { existeCategoriaPorId, existeProductoPorId } = require('../helpers/db-validators');

const router = Router();

/**
 * {{url}}/api/oredenes
 */

// Crear orden 
router.post('/',[
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeProductoPorId ),                                          
],crearOrden)
/*
router.put('/:id',[
  validarJWT,
  esAdminRole,
  check('id', 'No es un id de Mongo válido').isMongoId(),
  check('id').custom( existeProductoPorId ),                                          
],actualiazarOrden)*/


module.exports = router;