const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CategoriaSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, default: 'Sin descripción' },
    fecha: { type: Date, default: Date.now },
    usuario: {type: String}
},{
    versionKey: false
});

module.exports = model('Categoria', CategoriaSchema);