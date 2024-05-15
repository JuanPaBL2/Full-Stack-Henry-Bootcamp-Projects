const campoMidd = (req, res, next) => {
    const {title, director, duration, rate, poster, year, genre: generosSeleccionados} = req.body;

    if (title.trim() === '' || year.trim() === '' || director.trim() === '' || duration.trim() === '' || rate.trim() === '' || poster.trim() === '') {
        return res.status(400).json({error: "algo"});
    }
    next();
}

const movieMiddleware = (req, res, next) => {
    // Desestructuro la información recibida por request
    const {year} = req.body;

    // Validación del campo year
    if (year.length !== 4 || isNaN(year)) {
        return res.status(400).json({ error: "Campo year incorrecto" });
    }
    // Si todas las validaciones pasan, pasa al siguiente middleware
    next();
}

//las validaciones funcionan y pero el mensaje de error es 500 cuando yo puse 400. Ver eso.

module.exports = {movieMiddleware, campoMidd};

