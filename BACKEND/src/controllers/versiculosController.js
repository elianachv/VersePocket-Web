const Versiculo = require('../models/Versiculo');

async function listarVersiculos(req, res) {
    const versiculos = await Versiculo.find().lean();

    if (!versiculos || versiculos == undefined) {
        res.status(404).send({
            mensaje: 'No hay versiculos'
        });

    } else {
        res.status(200).send({
            versiculos: versiculos
        });
    }
    //res.render('versepocket/versiculos', { layout: 'versepocket', versiculos });
}

async function mostrarFormularioCrearVersiculo(req, res) {
    res.send('Formulario para crear versiculo');
    //res.render('versepocket/formularioVersiculo', { layout: 'versepocket' });

}

async function crearVersiculo(req, res) {
    let { cita, texto, comentario } = req.body;

    if (!cita || !texto) {
        res.status(400).send({
            mensaje: 'No se puede crear un versículo sin la cita'
        });
        //req.flash('mensajesErroneos', 'Es obligatorio escribir la cita y el texto del versículo');
        //res.redirect('/versiculo/crear');
    }
    else {
        var versiculo;

        if (!comentario) {
            versiculo = new Versiculo({ cita, texto });

        } else {
            versiculo = new Versiculo({ cita, texto, comentario });
        }

        //versiculo.usuario = req.user.id;
        await versiculo.save();
        res.status(200).send({
            mensaje: '¡Tu versículo se ha creado!',
            versiculo: versiculo
        })
        // req.flash('mensajesExitosos', 'Versículo CREADO exitosamente');
        // res.redirect('/versiculos');
    }
}

async function mostrarVersiculo(req, res) {
    const id = req.params.id;
    const versiculo = await Versiculo.findById(id).lean();
    if (!versiculo || versiculo == undefined) {
        res.status(404).send({
            mensaje: 'Versiculo no encontrado'
        });

    } else {
        res.status(200).send({
            mensaje: 'Versiculo encontrado',
            versiculo: versiculo
        });
    }
    //res.render('versepocket/versiculoIndividual', { layout: 'versepocket', versiculo });
}

async function mostrarFormularioEditarVersiculo(req, res) {
    const id = req.params.id;
    let versiculo;
    try {
        versiculo = await Versiculo.findById(id).lean();
        if(versiculo != undefined){
            res.status(200).send({
                versiculo: versiculo
            });
        }else{
            res.status(400).send({
                mensaje: 'No se puede editar el versículo porque no existe',
            });
        }
     
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error en el servidor intenta mas tarde'
        });
    }

    //res.render('versepocket/formularioVersiculoEditar', { layout: 'versepocket', versiculo }
}

async function editarVersiculo(req, res) {
    const id = req.params.id;
    const comentario = req.body.comentario;
    console.log('comentario: '+comentario);
    let versiculo = await Versiculo.findByIdAndUpdate(id, { $set: { comentario: comentario } });
    res.status(200).send({
        mensaje: 'Versiculo actualizado',
        versiculoActualizado: versiculo
    });


    //const url = '/versiculo/' + id;
    //res.redirect(url);

}

async function eliminarVersiculo(req, res) {
    const id = req.params.id;
    let versiculo;

    try {
        versiculo = await Versiculo.findByIdAndDelete(id).lean();
        res.status(200).send({
            mensaje: 'Versiculo eliminado con éxito',
            versiculoEliminado: versiculo
        });
    } catch (error) {
        res.status(400).send({
            mensaje: 'No se puede eliminar el versículo porque no existe'
        });
    }


    //req.flash('mensajesExitosos', 'Versiculo ELIMINADA exitosamente');
    //res.redirect('/versiculos');
}

module.exports = {
    listarVersiculos,
    mostrarFormularioCrearVersiculo,
    crearVersiculo,
    mostrarVersiculo,
    mostrarFormularioEditarVersiculo,
    editarVersiculo,
    eliminarVersiculo
}