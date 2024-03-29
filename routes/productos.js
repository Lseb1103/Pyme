const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, 
        validarCampos, 
        esAdminRole,tieneRole } = require('../middlewares');

const { crearProducto,
        obtenerProductos,
        obtenerProducto,
        obtenercategoria,
        actualizarProducto, 
        borrarProducto,
      } = require('../controllers/productos');

const { existeCategoriaPorId, existeProductoPorId} = require('../helpers/db-validators');
//const { generarPdf } = require('../helpers/pdj');

const router = Router();

// Ruta

//{{url}}/api/productos

//  Obtener todas las categorias - publico
router.get('/',[

],obtenerProductos );

// Obtener un producto por id - publico
router.get('/:id',[
    validarJWT,
    tieneRole('ADMIN_ROLE','USER_ROLE', 'USER_BRANCH_ROLE'),
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos,
    
], obtenerProducto );

// Crear producto - privado - cualquier persona con un token válido
router.post('/', [ 
    validarJWT,
    esAdminRole,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('categoria','No es un id de Mongo').isMongoId(),
    check('categoria').custom( existeCategoriaPorId ),
    validarCampos
], crearProducto );

// Actualizar - privado - cualquiera con token válido
router.put('/:id',[
    validarJWT,
    check('categoria','No es un id de Mongo').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos,
    esAdminRole,
], actualizarProducto );

// Borrar un producto - Admin
router.delete('/:id',[
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos,
], borrarProducto);

//Buscar por categoria 
router.patch('/obtenercategoria'
/*,[
    validarJWT,
    check('categoria','No es un id de Mongo').isMongoId(),
    validarCampos
]
*/, obtenercategoria);

module.exports = router;
