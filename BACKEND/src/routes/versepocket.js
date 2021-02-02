const router = require('express').Router();
const Categoria = require('../models/Categorias');
const Versiculo = require('../models/Versiculos');
const { isAuthenticated } = require('../helpers/auth');
/*
router.get('/inicio', isAuthenticated, (req, res) => {
    //res.send('Página principal de un usuario');
    res.render('versepocket/paginaPrincipal', { layout: 'versepocket' });
});

router.get('/categorias', isAuthenticated, async (req, res) => {
    console.log('ID: ' + req.user.id);
    let categorias = await Categoria.find({ usuario: req.user.id }).lean();
    res.render('versepocket/categorias', { layout: 'versepocket', categorias });
});

router.get('/categoria/crear', isAuthenticated, (req, res) => {
    res.render('versepocket/formularioCategoria', { layout: 'versepocket', modo: 'Crear' });

});

router.post('/categoria/crear', isAuthenticated, async (req, res) => {
    let { nombre, descripcion } = req.body;
    const errores = [];

    if (!nombre) {
        errores.push({ texto: 'Por favor digite el nombre de la categoría' });
        //req.flash('mensajesErroneos','Por favor digite el nombre de la categoría');
    }

    if (!descripcion) {
        //req.flash('mensajesErroneos','Aun no has digitado la descripcion');
    }

    if (errores.length > 0) {
        res.render('versepocket/formularioCategoria', {
            layout: 'versepocket',
            modo: 'Crear',
            errores,
            nombre,
            descripcion
        });
    } else {
        var categoria;

        if (!descripcion) {
            categoria = new Categoria({ nombre });


        } else {
            categoria = new Categoria({ nombre, descripcion });
        }
       // console.log('ID: ' + req.user.id);
        categoria.usuario = req.user.id;
        await categoria.save();
        req.flash('mensajesExitosos', 'Categoria CREADA exitosamente');
        res.redirect('/categorias');
    }
});

router.get('/categoria/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;
    let categoria = await Categoria.findById(id).lean();
    res.render('versepocket/categoriaIndividual', { layout: 'versepocket', categoria });
});



router.get('/categoria/editar/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;
    const categoria = await Categoria.findById(id).lean();
    res.render('versepocket/formularioCategoriaEditar', { layout: 'versepocket', modo: 'Editar', categoria });
});

router.put('/categoria/editar/:id', async (req, res) => {
    const id = req.params.id;
    const { nombre, descripcion } = req.body;
    if (!nombre) {
        req.flash('mensajesErroneos', 'No puedes dejar la categoría sin nombre');
        const url = '/categoria/editar/' + id;
        res.redirect(url);
    }
    else {

        await Categoria.findByIdAndUpdate(id, { nombre, descripcion });
        req.flash('mensajesExitosos', 'Categoria MODIFICADA exitosamente');
        const url = '/categoria/' + id;
        res.redirect(url);
    }

});

router.delete('/categoria/eliminar/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;
    await Categoria.findByIdAndDelete(id);
    req.flash('mensajesExitosos', 'Categoria ELIMINADA exitosamente');
    res.redirect('/categorias');
});

//VERSÍCULOS
router.get('/versiculo/crear', isAuthenticated, (req, res) => {
    res.render('versepocket/formularioVersiculo', { layout: 'versepocket' });
});

router.post('/versiculo/crear', isAuthenticated, async (req, res) => {
    let { cita, texto, comentario } = req.body;

    if (!cita || !texto) {
        req.flash('mensajesErroneos', 'Es obligatorio escribir la cita y el texto del versículo');
        res.redirect('/versiculo/crear');
    }
    else {
        var versiculo;

        if (!comentario) {
            versiculo = new Versiculo({ cita, texto });

        } else {
            versiculo = new Versiculo({ cita, texto, comentario });
        }

        versiculo.usuario = req.user.id;
        await versiculo.save();
        req.flash('mensajesExitosos', 'Versículo CREADO exitosamente');
        res.redirect('/versiculos');
    }
});

router.get('/versiculos', isAuthenticated, async (req, res) => {
    const versiculos = await Versiculo.find().lean();
    res.render('versepocket/versiculos', { layout: 'versepocket', versiculos });
});

router.get('/versiculo/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;
    const versiculo = await Versiculo.findById(id).lean();
    res.render('versepocket/versiculoIndividual', { layout: 'versepocket', versiculo });
});

router.get('/versiculo/editar/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;
    const versiculo = await Versiculo.findById(id).lean();
    res.render('versepocket/formularioVersiculoEditar', { layout: 'versepocket', versiculo });
});

router.put('/versiculo/editar/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;
    const comentario = req.body.comentario;
    await Versiculo.findByIdAndUpdate(id, { $set: { comentario: comentario } });
    const url = '/versiculo/' + id;
    res.redirect(url);
});

router.delete('/versiculo/eliminar/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;
    await Versiculo.findByIdAndDelete(id);
    req.flash('mensajesExitosos', 'Versículo ELIMINADO exitosamente');
    res.redirect('/versiculos');
});

*/

module.exports = router;