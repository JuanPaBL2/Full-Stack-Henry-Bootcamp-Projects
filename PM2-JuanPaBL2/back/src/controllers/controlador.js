//creo el controlador (middleware) que manejara la solicitud
const peliculas = require('../services/peliculas')


//CONTROLADOR PARA GET
const controlador = async (req, res) => { 
    try{
        const arrayPeliculas = await peliculas.returnMovies();
        res.status(200).json(arrayPeliculas);
    } catch (error){
        res.status(500).send(error.message);
    }
}

//CONTROLADOR PARA POST
const controladorMoviesForm = async (req, res) => {
    try {
        const {title, year, director, duration, genre, rate, poster} = req.body;
        const datosPeliculas = await peliculas.moviesFormService({title, year, director, duration, genre, rate, poster});
        res.status(200).json(datosPeliculas)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {controlador, controladorMoviesForm};

