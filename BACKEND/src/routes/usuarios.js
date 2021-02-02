const router = require('express').Router();
const usuariosController = require('../controllers/usuariosController');
//const passport = require('passport');

router.get('/usuarios/registro', usuariosController.mostrarFormularioRegistro);
router.post('/usuarios/registro', usuariosController.registrarUsuario );
router.get('/usuarios/inicio-sesion', usuariosController.mostrarFormularioInicioSesion);

/*
router.post('/inicio-sesion', passport.authenticate('local', {
    successRedirect: '/inicio',
    failureRedirect: '/inicio-sesion',
    failureFlash: true
}));

router.get('/cerrar-sesion', (req, res) => {
    req.logOut();
    res.redirect('/inicio-sesion');
});
*/


module.exports = router;