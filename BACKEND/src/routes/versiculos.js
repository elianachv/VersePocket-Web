const router = require('express').Router();
const versiculosController = require('../controllers/versiculosController');

router.get('/versiculos/crear', versiculosController.mostrarFormularioCrearVersiculo );

router.post('/versiculos/crear', versiculosController.crearVersiculo);

router.get('/versiculos', versiculosController.listarVersiculos );

router.get('/versiculos/mostrar/:id', versiculosController.mostrarVersiculo  );

router.get('/versiculos/editar/:id', versiculosController.mostrarFormularioEditarVersiculo );

router.put('/versiculos/editar/:id',  versiculosController.editarVersiculo);

router.delete('/versiculos/eliminar/:id', versiculosController.eliminarVersiculo);

module.exports = router;