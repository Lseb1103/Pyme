const { Router } = require('express');
//const { check } = require('express-validator');

//const { validarJWT, validarCampos, esAdminRole,tieneRole } = require('../middlewares');

const {reporteGeneral, reporteSalida, reporteCompras, generarPdfGeneral} = require('../controllers/reporte');

//const { existeCategoriaPorId, existeProductoPorId} = require('../helpers/');
//const { generarPdf } = require('../helpers/pdj');

const router = Router();

// Ruta

//{{url}}/api/reporte

//  Obtener todas las categorias - publico
router.get('/reporteGeneral', reporteGeneral);
router.get('/reporteCompra', reporteCompras);
router.get('/reporteSalida', reporteSalida);
/*
// Obtener un producto por id - publico
router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos,
    
], obtenerProducto );

// Crear producto - privado - cualquier persona con un token válido
router.post('/', [ 
    validarJWT,
    tieneRole('ADMIN_ROLE','USER_ROLE'),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('categoria','No es un id de Mongo').isMongoId(),
    check('categoria').custom( existeCategoriaPorId ),
    validarCampos
], crearProducto );

// Actualizar - privado - cualquiera con token válido
router.put('/:id',[
    validarJWT,
    // check('categoria','No es un id de Mongo').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos
], actualizarProducto );

// Borrar un producto - Admin
router.delete('/:id',[
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos,
], borrarProducto);

router.patch('/',generarPdf() );
*/
module.exports = router;