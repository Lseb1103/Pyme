const { Router } = require('express');
const { check } = require('express-validator');


const { validarJWT, 
        validarCampos, 
        tieneRole, 
        esAdminRole } = require('../middlewares');


//const { login,register, logout, decoded } = require('../controllers/auth');
const { crearNotificacion, 
        obtenerNotificacion, 
        actualizarNotificacion, 
        borrarNotificacion, 
        filtroNoti} = require('../controllers/notificaciones');

const router = Router();

router.get('/',[
    validarJWT,
    tieneRole('ADMIN_ROLE','USER_ROLE', 'USER_BRANCH_ROLE')
], obtenerNotificacion );

router.post('/',[
    validarJWT,
    tieneRole('ADMIN_ROLE','USER_BRANCH_ROLE','USER_ROLE'),
], crearNotificacion );

router.put("/:id",actualizarNotificacion );

router.delete('/:id',borrarNotificacion);

router.patch('/',[
    //validarJWT,
], filtroNoti)

module.exports = router;