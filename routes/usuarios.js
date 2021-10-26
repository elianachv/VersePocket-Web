const Usuario = require('../models/Usuario');
const router = require('express').Router();
const passport = require('passport');


router.get('/registro', (req, res) => {
    res.render('versepocket/formularioRegistro', { layout: 'nn' });
});
router.post('/registro', async (req, res) => {
    const { nombre, correo, contrasena, confirmacion } = req.body;
    var errores = [];
    if (!nombre) {
        errores.push({ texto: 'Debes colocar tu nombre' });
    }

    if (!correo) {
        errores.push({ texto: 'Debes colocar tu correo. Recuerda que de no ser válido no podrás activar tu cuenta' });
    }

    if (!contrasena || !confirmacion) {
        errores.push({ texto: 'Debes colocar tu contraseña y la confirmación de la misma' });
    } else if (contrasena.length < 8 || contrasena.length > 16) {
        errores.push({ texto: 'La contraseña debe tener mínimo 8 carácteres y máximo 16' });
    } else if (contrasena != confirmacion) {
        errores.push({ texto: 'La contraseña y la confirmación de la misma deben ser iguales' });
    }

    if (errores.length > 0) {
        res.render('versepocket/formularioRegistro', { layout: 'nn', nombre, correo, contrasena, confirmacion, errores });
    } else {

        const correoNuevo = await Usuario.findOne({ correo: correo });
        if (correoNuevo) {
            req.flash('mensajesErroneos', 'Ya existe un usuario registrado con ese correo');
            res.redirect('/registro');
        } else {
            var usuario = new Usuario({ nombre, correo, contrasena });
            usuario.contrasena = await usuario.cifrarContrasena(contrasena);
            await usuario.save();
            req.flash('mensajesExitosos', '¡Genial! Ya estás registrado');
            res.redirect('/inicio-sesion');
        }

    }

});

router.get('/inicio-sesion', (req, res) => {
    res.render('versepocket/formularioInicioSesion', { layout: 'nn' });
});

router.post('/inicio-sesion', passport.authenticate('local', {
    successRedirect: '/inicio',
    failureRedirect: '/inicio-sesion',
    failureFlash: true
}));

router.get('/cerrar-sesion', (req, res) => {
    req.logOut();
    res.redirect('/inicio-sesion');
});



module.exports = router;