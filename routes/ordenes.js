const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, 
        validarCampos, 
        esAdminRole,
        tieneRole, 
        validateOrder } = require('../middlewares');

const { crearOrden, 
        obtenerOrdenesSalida, 
        obtenerOrdenesIngreso } = require('../controllers/ordenes');

const { existeCategoriaPorId, 
        existeProductoPorId, } = require('../helpers');

const router = Router();

/**
 * {{url}}/api/oredenes
 */

// Crear orden 
router.post('/',[
    validarJWT,
    validateOrder,
    tieneRole('USER_ROLE', 'USER_BRANCH_ROLE', ),
    //esAdminRole,

    //validateOrder,
    check('sucursal','La sucursal es obligatoria').not().isEmpty(),
    //check('categoria','No es un id de Mongo').isMongoId(),
    //check('categoria').custom( existeCategoriaPorId ),
    validarCampos

], crearOrden);

router.get('/salida', obtenerOrdenesSalida);
router.get('/ingreso', obtenerOrdenesIngreso)

module.exports = router;