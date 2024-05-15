const Movie = require('../models/UserModel')

const returnMovies = async () => {
    try {
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        throw new Error('Error al obtener las películas');
    }
};

//____________________________________________
const moviesFormService = async (data) => {
        const dataForm = await Movie.create(data);
        return dataForm;
};
        
module.exports = {
    returnMovies: returnMovies, moviesFormService: moviesFormService
};
//la validacion la usa en el modulo servicio 