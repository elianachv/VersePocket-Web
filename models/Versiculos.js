const mongoose = require('mongoose');
const { Schema } = mongoose;

const VersiculoSchema = new Schema({
    cita: { type: String, required: true },
    texto: { type: String, required: true},
    comentario: { type: String, default: 'Sin comentarios' },
    fecha: { type: Date, default: Date.now },
    usuario: {type: String}
});

module.exports = mongoose.model('Versiculo', VersiculoSchema);