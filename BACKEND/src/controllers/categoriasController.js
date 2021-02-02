const Categoria = require('../models/Categoria');

async function listarCategorias(req, res) {
    console.log('Buscando categorias ....');
    //console.log('ID: ' + req.user.id);
    //const idUsuario = req.user.id;
    //Criterio de busqueda = { usuario: idUsuario}
    let categorias = await Categoria.find().lean();
    res.status(200).send({
        categorias: categorias
    });
    console.log(categorias);
    //res.render('versepocket/categorias', { layout: 'versepocket', categorias });
}

async function mostrarFormularioCrearCategoria(req, res) {
    res.send('Formulario para crear categoria');
    //res.render('versepocket/formularioCategoria', { layout: 'versepocket', modo: 'Crear' });
}
async function crearCategoria(req, res) {

    let { nombre, descripcion } = req.body;

    console.log('Body recibido - ' + req.body);
    const errores = [];
    const advertencias = [];

    if (!nombre) {
        errores.push({
            tipo: 'Parámetros incompletos',
            texto: '¡Olvidaste el nombre de la categoría! Por favor ponle un nombre a tu categoría'
        });
        //req.flash('mensajesErroneos','Por favor digite el nombre de la categoría');
    }

    if (!descripcion) {
        advertencias.push({
            tipo: 'Parámetros incompletos',
            texto: '¡Olvidaste la descripción de la categoría! Tu categoría será creada sin descripción, pero no te preocupes podrás editarla después'
        });
        //req.flash('mensajesErroneos','Aun no has digitado la descripcion');
    }

    if (errores.length > 0) {

        res.status(400).send({
            creacionExitosa: false,
            errores: errores,
            advertencias: advertencias,
            mensaje: 'No se pudo crear la categoría'
        });

    } else {
        var categoria;

        if (!descripcion) {
            categoria = new Categoria({ nombre });
        } else {
            categoria = new Categoria({ nombre, descripcion });
        }
        // console.log('ID: ' + req.user.id);
        //categoria.usuario = req.user.id;
        await categoria.save();

        res.status(200).send({
            creacionExitosa: true,
            errores: errores,
            advertencias: advertencias,
            mensaje: '¡Tu ha categoría ha sido creada!'
        });

        //req.flash('mensajesExitosos', 'Categoria CREADA exitosamente');
        //res.redirect('/categorias');
    }

}

async function mostrarCategoria(req, res) {
    const id = req.params.id;
    let categoria;

    try {

        categoria = await Categoria.findById(id).lean();
        console.log('Categoria encontrada: ' + categoria);
        res.status(200).send({
            mensaje: 'Categoria encontrada',
            categoria: categoria
        });

    } catch (error) {
        console.log('La categoria ' + id + ' no fue encontrada');
        res.status(404).send({
            mensaje: 'La categoría no existe'
        });
    }
}

async function mostrarFormularioEditarCategoria(req, res) {
    const id = req.params.id;
    let categoria;
    try {
        categoria = await Categoria.findById(id).lean();
        if (categoria != undefined) {
            res.status(200).send({
                categoria: categoria
            });
        } else {
            res.status(404).send({
                mensaje: 'La categoria no se puede editar porque no existe'
            });
        }


    } catch (error) {
        res.status(500).send({
            mensaje: 'Error en el servidor intenta mas tarde'
        });
    }

}

async function editarCategoria(req, res) {
    const id = req.params.id;
    const { nombre, descripcion } = req.body;
    if (!nombre) {
        res.status(400).send({
            mensaje: 'No se puede dejar la categoría sin nombre'
        });
        //req.flash('mensajesErroneos', 'No puedes dejar la categoría sin nombre');
        //const url = '/categoria/editar/' + id;
        //res.redirect(url);
    }
    else {
        const categoria = await Categoria.findByIdAndUpdate(id, { nombre, descripcion }).lean();
        res.status(200).send({
            mensaje: 'Categoría actualizada',
            categoriaActualizada: categoria
        });
        //req.flash('mensajesExitosos', 'Categoria MODIFICADA exitosamente');
        //const url = '/categoria/' + id;
        //res.redirect(url);
    }
}

async function eliminarCategoria(req, res) {
    const id = req.params.id;
    let categoria;

    try {
        categoria = await Categoria.findByIdAndDelete(id).lean();
        res.status(200).send({
            mensaje: 'Categoria eliminada con éxito',
            categoriaEliminada: categoria
        });

    } catch (error) {
        res.status(400).send({
            mensaje: 'La categoria no se puede eliminar porque no existe'
        });

    }


    //req.flash('mensajesExitosos', 'Categoria ELIMINADA exitosamente');
    //res.redirect('/categorias');
}

module.exports = {
    listarCategorias,
    mostrarFormularioCrearCategoria,
    crearCategoria,
    mostrarCategoria,
    mostrarFormularioEditarCategoria,
    editarCategoria,
    eliminarCategoria
}