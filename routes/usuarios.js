
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,
    validarJWT,
    esAdminRole, 
    tieneRole} = require('../middlewares');

const { esRoleValido,
        emailExiste, 
        existeUsuarioPorId } = require('../helpers/db-validators');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete } = require('../controllers/usuarios');

const router = Router();
 
router.get('/',[
    //validarJWT,
    //esAdminRole, 
], usuariosGet );

router.put('/:id',[
    validarJWT,
    //esAdminRole,
    tieneRole('ADMIN_ROLE','USER_ROLE', 'USER_BRANCH_ROLE'), 
    check('id', 'No es un ID válido').isMongoId(),//
    check('id').custom( existeUsuarioPorId ),
    check('rol').custom( esRoleValido ), 
    //validarCampos
],usuariosPut );

router.post('/',[
    validarJWT, 
    esAdminRole,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExiste ),
    check('rol').custom( esRoleValido ), 
    validarCampos
], usuariosPost );

router.delete('/:id',[
    validarJWT,
    esAdminRole, 
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
],usuariosDelete );






module.exports = router;