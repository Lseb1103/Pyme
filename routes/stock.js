const { Router } = require('express');
const { check } = require('express-validator');


const { validarJWT, validarCampos, esAdminRole,tieneRole } = require('../middlewares');

const { obtenerResumenProducto,
    obtenerunprodespecifico
 } = require('../controllers/stock');

const { existeProductoPorId } = require('../helpers/db-validators');

const router = Router();

/**
 * {{url}}/api/stock
 */

//  Obtener todas el stock - publico
router.get('/', obtenerResumenProducto );

// Obtener un producto por id - publico
router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos,

], obtenerunprodespecifico );


module.exports = router;