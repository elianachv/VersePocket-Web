const router = require('express').Router();
const categoriasController = require('../controllers/categoriasController');
//Rutas con autenticacion isAuthenticated
/* Rutas delegadas al frontend 
    router.get('/categoria/crear', categoriasController.mostrarFormularioCrearCategoria);
*/

router.get('/categorias', categoriasController.listarCategorias);

router.post('/categorias/crear', categoriasController.crearCategoria);

router.get('/categorias/mostrar/:id', categoriasController.mostrarCategoria);

router.get('/categorias/editar/:id', categoriasController.mostrarFormularioEditarCategoria);

router.put('/categorias/editar/:id', categoriasController.editarCategoria);

router.delete('/categorias/eliminar/:id', categoriasController.eliminarCategoria);

module.exports = router;