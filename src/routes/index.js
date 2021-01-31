const router = require('express').Router();

router.get('/', (req, res) => {
    //res.send('Página principal de la aplicación por ahora');
    res.render('index', {layout: 'main'});
});

router.get('/seleccion-versepocket', (req, res) => {
    res.send('Selección versepocket');
});


module.exports = router;