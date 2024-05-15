//CREAR ENRUTADOR
const { Router } = require('express');
const {controlador, controladorMoviesForm} = require("../controllers/controlador");
const {movieMiddleware, campoMidd} = require('../middlewares/validateMovies')

const router = Router();

router.get('/movies', controlador)

router.post('/movies', movieMiddleware, campoMidd, controladorMoviesForm)

module.exports = router;