//importo moongose, ODM para enlazar un servidor con base de datos mongoDB
const mongoose = require('mongoose');

//importo dotenv, sistema para crear variables de entorno (ocultar datos sensibles)
require('dotenv').config();

//importo la URI de mi base de datos mediante DOTENV
const URI = process.env.v_entorno //--> v_entorno: contiene la URI en el archivo dotENV el cual no se pushea a github por lo tanto esa informacion nadie la ve.

//creo funcion y aplico metodo connection para enlazar BD y Servidor.
const dbConnection = async () => {
    await mongoose.connect(URI);
};

module.exports = dbConnection;

