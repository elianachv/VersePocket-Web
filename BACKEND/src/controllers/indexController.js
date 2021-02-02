function mostrarSitioWeb(req, res) {
    res.send('Página principal de la aplicación por ahora');
    //res.render('index', {layout: 'main'});
}

module.exports = {
    mostrarSitioWeb
}