const helpers = {}
helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('mensajesErroneos', 'Aún no has iniciado sesión');
        res.redirect('/inicio-sesion');
    }
}

module.exports = helpers;