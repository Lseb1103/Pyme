
const { Router } = require('express');
const { check } = require('express-validator');
const { postPage,
        getAllPages,
        getPage,
        deletePage,
        putPage } = require('../controllers/paginas');
        
const { existeUsuarioPorId,
        existePaginaPorId } = require('../helpers/db-validators');

    const { validarCampos,
            validarJWT,
            esAdminRole } = require('../middlewares');

const router = Router();

// create page

router.post("/paginas",[
    validarJWT,
    esAdminRole,
    check('title','El titulo el obligaatorio').not().isEmpty(),
    validarCampos
], postPage);

// Obtener todas las paginas - publico
    
router.get('/',[
    validarJWT, 
    //esAdminRole
], getAllPages);

// Obtener una pagina por id - publico

router.get('/:id',[
    validarJWT,
    //esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existePaginaPorId),
    validarCampos
], getPage);

    // delete page
router.delete('/:id',[
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
], deletePage);

    // update page
router.put('/:id',[
    validarJWT,
    esAdminRole,
    check('id').custom(existePaginaPorId),    
    validarCampos
], putPage);

module.exports = router;