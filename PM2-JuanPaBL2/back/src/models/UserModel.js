//importo moongose
const mongoose = require('mongoose');
//import el schema de la libreria moongose con destructuring
const { Schema, model } = mongoose;

//____CREAR SCHEMA (esquema de modelo BD)_______
//los nombres de las propiedades del esquema deben coincidir con los nombres de las propiedades del objeto que requiera hacer un post.


const productoSchema = new Schema({
    title: String,
    year: String,
    director: String,
    duration: String,
    genre: Array,
    rate: String,
    poster: String,
});

//___IMPLEMENTAR MODELO CON SCHEMA___

const Movie = model("Movie", productoSchema);

module.exports = Movie;