const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Usuario = require('../models/Usuario');

passport.use(new LocalStrategy(
    {
        usernameField: 'correo', passwordField: 'contrasena'
    },
    async (correo, contrasena, done) => {
        console.log('Validando ...');
        const usuario = await Usuario.findOne({ correo: correo });
        if (!usuario) {
            console.log('Usuario no encontrado ...');
            return done(false, null, { message: 'Usuario no encontrado' });
        } else {
            const correcto = await usuario.compararContrasena(contrasena);
            if (correcto) {
                console.log('El usuairo es: ' + usuario);
                return done(null, usuario);
            } else {
                console.log('Contraseña incorrecta ...');
                return done(false, null, { message: 'Contraseña incorrecta' });
            }
        }
    }));

passport.serializeUser((usuario, done) => { done(null, usuario.id); });

passport.deserializeUser((id, done) => { Usuario.findById(id, (error, usuario) => { done(error, usuario); }); });