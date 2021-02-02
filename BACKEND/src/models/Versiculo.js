const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const VersiculoSchema = new Schema({
    //cita: { type: String, required: true },
    cita: {
        libro: String,
        capitulo: Number,
        versiculoInicial: Number,
        versiculoFinal: Number
    },
    texto: { type: String, required: true },
    comentario: { type: String, default: 'Sin comentarios' },
    fecha: { type: Date, default: Date.now },
    usuario: String
},{
    versionKey: false
});

module.exports = model('Versiculo', VersiculoSchema);