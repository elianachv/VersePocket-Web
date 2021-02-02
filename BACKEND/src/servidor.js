const express = require('express');
const cors = require('cors');

//Inicialización
const servidor = express();
servidor.set('port', process.env.PORT || 3000);

//Middlewares
servidor.use(cors());
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: false })); //Entender los datos enviados desde la url

//Rutas
servidor.use(require('./routes/index'));
servidor.use(require('./routes/categorias'));
servidor.use(require('./routes/versiculos'));
servidor.use(require('./routes/usuarios'));

/* Otra manera de importar las rutas
servidor.use('/categorias',require('./routes/categorias'))*/

module.exports = servidor;
