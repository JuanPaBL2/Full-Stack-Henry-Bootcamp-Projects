const crearTarjetas = require('./index');
const validarForm = require('./form')

const axios = require('axios');

//funcion asincronica que ejecuta una solicitud get al servidor, mediante un bloque try catch y almacenando la informacion requerida en una funcion que crea tarjetas html con dicha informacion.
const solicitarMovies = async () => {
    try {
        const response = await axios.get('http://localhost:3000/movies');
        const dataMovie = response.data;
        crearTarjetas(dataMovie); 
    } catch (error) {
        alert(error.message);
    }
}

solicitarMovies();

