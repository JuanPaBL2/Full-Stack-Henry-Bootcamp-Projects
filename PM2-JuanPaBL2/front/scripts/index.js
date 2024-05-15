//CREA TARJETA PARA CADA ELEMENTO DE tempData.
function crearTarjetas(data) {
  const contenedorTarjetas = document.createElement('div');
  contenedorTarjetas.classList.add('contenedorG-tarjetas-best'); 

  data.forEach(pelicula => {
    const tarjeta = document.createElement('li');
    tarjeta.classList.add('tarjeta-best'); 

    tarjeta.innerHTML = `
      <div class="contenedor-tarjeta">
        <img src="${pelicula.poster}" class="imagen-tarjeta" id="imgt1">
        <div class="informacion">
          <h2 class="titulo" id="tarjeta-uno">${pelicula.title}</h2>
          <section class="detalles">
            <span><b>Año:</b></span><span id="spant1">${pelicula.year}</span><br>
            <span><b>Director:</b></span><span id="spant2">${pelicula.director}</span><br>
            <span><b>Duración:</b></span><span id="spant3">${pelicula.duration}</span><br>
            <span><b>Género:</b></span><span id="spant4">${pelicula.genre.join(', ')}</span>
            <span><b>Puntuacion:</b></span><span id="spant5">${pelicula.rate}</span>
          </section>
        </div>
      </div>
    `;

    contenedorTarjetas.appendChild(tarjeta);
  });

  const contenedorPrincipal = document.getElementById('lista-tarjetas');
  contenedorPrincipal.appendChild(contenedorTarjetas);
}


module.exports = crearTarjetas;