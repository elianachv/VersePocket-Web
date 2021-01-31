const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

//Inicializaciones
const servidor = express();
require('./database');
require('./config/passport');


//Configuraciones
servidor.set('port', process.env.PORT || 3000);
servidor.set('views', path.join(__dirname, 'views'));
servidor.engine('.hbs', expressHandlebars({
    //Configura el motor de plantillas y con el comando set le indica a la aplicacion cual se va a utilizar
    defaultLayout: 'main',
    layoutsDir: path.join(servidor.get('views'), 'layouts'),
    partialsDir: path.join(servidor.get('views'), 'partials'),
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    extname: '.hbs'
}));
servidor.set('view engine', '.hbs');

//Middlewares
servidor.use(express.urlencoded({ extended: false })); //Entender los datos enviados desde la url
servidor.use(methodOverride('_method'));
servidor.use(session({
    //Configuración para que guarde los datos de la sesiones de los usuarios
    secret: 'myapp',
    resave: true,
    saveUninitialized: true
}));
servidor.use(passport.initialize());
servidor.use(passport.session());
servidor.use(flash());


//Variables globales
servidor.use((req, res, next) => {
    res.locals.mensajesExitosos = req.flash('mensajesExitosos');
    res.locals.mensajesErroneos = req.flash('mensajesErroneos');
    res.locals.error = req.flash('error');
    res.locals.usuario = req.user || null;
    next();
});

//Rutas
servidor.use(require('./routes/index'));
servidor.use(require('./routes/usuarios'));
servidor.use(require('./routes/versepocket'));

//Archivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')));

//Servidor
servidor.listen(servidor.get('port'), () => {
    console.log('Servidor levantado en el puerto ', servidor.get('port'));
});