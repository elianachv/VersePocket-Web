const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcryptjs = require('bcryptjs');

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    contrasena: { type: String, required: true },
    fecha: { type: Date, default: Date.now }
}, {
    timestamps: true,
    versionKey: false
});

//Para el registro
UsuarioSchema.methods.cifrarContrasena = async (contrasena) => {
    const salt = await bcryptjs.genSalt(10);
    const contrasenaCifrada = bcryptjs.hash(contrasena, salt);
    return contrasenaCifrada;
}

//Para el inicio de sesion
UsuarioSchema.methods.compararContrasena = async function (contrasena) {
    return await bcryptjs.compare(contrasena, this.contrasena);
}

module.exports = model('Usuario', UsuarioSchema);