//requiero express
const express = require('express')

//importo los middlewares
const morgan = require("morgan")
const cors = require('cors')

//creo el servidor
const app = express();

//aplico middlewares a las solicitudes del servidor
app.use(morgan('dev'))
app.use(cors())
app.use(express.json()) 

//Importo el enrutador
const router = require('../routers/router')

//Luego que las middleware se apliquen enruto la solicitud
app.use(router)

//exporto el servidor
module.exports = app;



