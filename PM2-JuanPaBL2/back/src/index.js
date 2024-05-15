//import el servidor
const app = require('./services/server')
const dbConnection = require('./config/dbConfig')

//Levanto el servidor y lo conecto a la base de datos.
dbConnection()
    .then((respuesta) => {
        app.listen(3000, () => {
            console.log(`servidor escuchando en el puerto ${3000}`);
        });
    })
    .catch(error => {
        console.error("Error al conectar a la base de datos:", error);
    });