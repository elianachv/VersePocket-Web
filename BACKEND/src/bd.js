const mongoose = require('mongoose');

//Configuracion e inicialización de la bd
mongoose.connect('mongodb://localhost/versepocket-bd', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (error) => {
    if (error) {
        console.error('Hubo un problema con la conexión: ', error);
    } else {
        console.info('Conexión de la base datos de Versepocket exitosa');
    }
});


/*
Código más profesional:
.then(db => console.log('Conexión a la bd exitosa')))
.catch(err => console.log('Hubo un error en la conexión ', err));

*/

