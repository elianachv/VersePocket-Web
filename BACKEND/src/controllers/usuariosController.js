const Usuario = require('../models/Usuario');

function mostrarFormularioRegistro(req, res) {
    res.send('Formulario de registro');
}

async function registrarUsuario(req, res) {
    console.log('Se va a registrar un usuario nuevo');
    const { nombre, correo, contrasena, confirmacion } = req.body;
    var errores = [];
    if (!nombre) {
        errores.push({
            tipo: 'Parametros incompletos',
            texto: 'Debes colocar tu nombre'
        });
    }

    if (!correo) {
        errores.push({
            tipo: 'Parametros incompletos',
            texto: 'Debes colocar tu correo. Recuerda que de no ser válido no podrás activar tu cuenta'
        });
    }

    if (!contrasena || !confirmacion) {
        errores.push({
            tipo: 'Error en la validación de la contraseña',
            texto: 'Debes colocar tu contraseña y la confirmación de la misma'
        });
    } else if (contrasena.length < 8 || contrasena.length > 16) {
        errores.push({
            tipo: 'Error en la validación de la contraseña',
            texto: 'La contraseña debe tener mínimo 8 carácteres y máximo 16'
        });
    } else if (contrasena != confirmacion) {
        errores.push({
            tipo: 'Error en la validación de la contraseña',
            texto: 'La contraseña y la confirmación de la misma deben ser iguales'
        });
    }

    if (errores.length > 0) {

        res.status(400).send({
            errores: errores
        });
       // res.render('versepocket/formularioRegistro', { layout: 'nn', nombre, correo, contrasena, confirmacion, errores });
    } else {

        const correoNuevo = await Usuario.findOne({ correo: correo });
        if (correoNuevo) {
            res.status(400).send({
                mensaje: 'Ya existe una cuenta con ese correo'
            });
            //req.flash('mensajesErroneos', 'Ya existe un usuario registrado con ese correo');
            //res.redirect('/registro');
        } else {
            var usuario = new Usuario({ nombre, correo, contrasena });
            usuario.contrasena = await usuario.cifrarContrasena(contrasena);
            await usuario.save();
            res.status(200).send({
                mensaje: 'Ya estas registrado'
            });
            //req.flash('mensajesExitosos', '¡Genial! Ya estás registrado');
            //res.redirect('/inicio-sesion');
        }

    }
}

function mostrarFormularioInicioSesion(req, res) {
    res.send('Formulario de inicio de sesión');
}

module.exports = {
    mostrarFormularioRegistro,
    registrarUsuario,
    mostrarFormularioInicioSesion
}