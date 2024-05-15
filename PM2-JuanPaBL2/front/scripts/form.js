const axios = require('axios');


//EVENT HANDLER SEND FORM
function validarForm(){
    const title = document.getElementById('titulo').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duracion').value;
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;
    const year = document.getElementById('año').value;

    //valido que los campos no esten vacios
    if (title.trim() === '' || year.trim() === '' || director.trim() === '' || duration.trim() === '' || rate.trim() === '' || poster.trim() === '') {
        alert('Por favor completa todos los campos.')
        return;
    }
    //valido que la longitud del value del input year sea un numero de 4 digitos.
    if (year.length !== 4 || isNaN(year)) {
       alert('Por favor, ingrese un año válido de 4 dígitos.');
       return;
    }
    
   //Obtenego los géneros
   const generosSeleccionados = [];

   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
   checkboxes.forEach(function(checkbox) {
       if (checkbox.checked) {
           generosSeleccionados.push(checkbox.value);
       }
   });

   //Validar los checkbox
   if (generosSeleccionados.length === 0) {
       alert('Por favor, selecciona al menos un género.');
       return;
   }

    //insertar los datos obtenidos del formulario en un objeto
    const dataPost = {title, director, duration, rate, poster, year, genre: generosSeleccionados}; //los nombres de las propiedades deben ser igual a las del esquema moongose del lado del servidor.
    return dataPost;
}

//EVENT HANDLER CLEAN FORM
function cleanForm(){
     document.getElementById('titulo').value = '';
     document.getElementById('director').value = '';
     document.getElementById('duracion').value = '';
     document.getElementById('rate').value = '';
     document.getElementById('poster').value = '';
     document.getElementById('año').value = '';
     
     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
     checkboxes.forEach(function(checkbox) {
         checkbox.checked = false;
     });
    
}

//EVENT LISTENER CLEAN FORM
const botonLimpieza = document.getElementById('botonLimpiar');
botonLimpieza?.addEventListener("click", cleanForm);
  
//EVENT LISTENER SEND FORM
const botonEnviar = document.getElementById('botonEnviar');

//SOLICITUD POST CON DATA OBTENIDA LUEGO DE VALIDAR
botonEnviar?.addEventListener("click", async () =>{
    try {
        const datos = validarForm(); 
        await axios.post('http://localhost:3000/movies', datos); 
    } catch (error) {
        alert(error.message);
    }
});

