const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { login,
        logout } = require('../controllers/auth');

const router = Router();

router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],login );

//router.post("/register", register);
//router.put("/logout", logout);
router.post('/logout',logout);

module.exports = router;