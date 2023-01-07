
const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerPaginas,
        obtenerPagina,
        actualizarPagina,
        crearPagina,
        borrarPagina } = require('../controllers/paginas');
        
const { esRoleValido,
         emailExiste, 
         existeUsuarioPorId,
         existePaginaPorId} = require('../helpers/db-validators');
const {
    validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole} =require('../middlewares');

    const router = Router();

    // create page

    router.post("/paginas",[
        //tieneRole('USER_ADMIN','USER_ROLE','USER_BRANCH_ROLE '),
        check('titulo','El titulo el obligaatorio').not().isEmpty(),
        validarCampos
    ], crearPagina);

    // Obtener todas las paginas - publico
    
    router.get('/', obtenerPaginas);

    // Obtener una pagina por id - publico

    router.get('/',[
        check('id', 'No es un id de Mongo válido').isMongoId(),
        check('id').custom(existePaginaPorId),
        validarCampos,
        //tieneRole('USER_ADMIN','USER_ROLE','USER_BRANCH_ROLE '),
    ], obtenerPagina);

    // delete page
    router.delete('/paginas/:id',[
        validarJWT,
        //tieneRole('USER_ADMIN','USER_ROLE','USER_BRANCH_ROLE '),
        check('id', 'No es un id de Mongo válido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
    ], borrarPagina);

    // update page
    router.put('/paginas/:id',[
        validarJWT,
        //tieneRole('USER_ADMIN','USER_ROLE','USER_BRANCH_ROLE '),
        check('id').custom(existePaginaPorId),    
        validarCampos
    ], actualizarPagina);

    module.exports = router;