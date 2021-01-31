# Aplicación Web VersePocket
Sitio web y aplicativoo web de la aplicación móvil VersePocket

## Descripción de archivos
### node_modules
Carpeta en donde residen todo los módulos de node implementados en el proyecto para su funcionamiento
#### Módulos Node utilizados
##### express
Permite la creación y administración del servidor web 
#####  express-handlebars
Es un motor de plantillas que permite la extensión de funcionalidades de los archivos html para desplegar de manera dináminca la información de cada uno de los usuarios.
#####  express-session
Mantiene los datos de un usuario en sesiones
#####  moongoose
Administra la conexión con la base de datos de MongoDB
#####  passport
#####  passport-local
#####  method-override
Permite que los formularios puedan enviar más tipos de metodos y no solamente get y post
#####  bcryptjs
Encripta las contraseñas de los usuarios para brindar una mayor seguridad
#####  connect-flash 
#####  nodemon
Permite la reinicialización del sevidor de manera automatica cuando ocurra un cambio. Facilita el desarrollo de la aplicación.


### src
Es la carpeta en donde se encuentra todo el codigo fuente de la aplicación

#### config

#### public
En esta carpeta se encuentra todo el código Front-End estático es decir la página web de VersePocket dado que solo es informativa. 

#### routes
En esta carpeta se codifican y exportan todas las rutas de la aplicación, es decir que el archivo principal (index.js) llama los archivos de esta carpeta para que cuando los usuarios soliciten estas rutas sean redirigidos al contenido deseado. Se han creado varios archivos para controlar fácilmente las rutas según su uso:
- index.js = las rutas principales (hacia la página web)
- usuarios.js = las rutas relacionadas con la inscripción e inicio de sesión de los usuarios
- versepocket.js = las rutas relacionadas con la interacción de los usarios con la aplicación

#### views
En esta carpeta se almacenan las plantillas html, es decir los archivos html que comparten todos los usuarios pero en el cual se desplegará la información de cada uno de ellos de manera dinámica (recopilada de la bd). 
- La carpeta layaouts
- La carpeta partials

#### index.js
Es el archivo principal que levanta y administra el servidor 

#### database.js
Es el archivo que levanta y administra la base de datos
