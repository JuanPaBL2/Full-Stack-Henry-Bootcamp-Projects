//Se crean dos clases que son las estructuras de datos del formulario html.

//DEFINE LAS PROPIEDADES DE LOS DATOS DEL FORMULARIO
class Activity {
    //
    constructor(id, title, description, imgUrl){
        //PROPIEDAD NO INGRESADA POR EL USUARIO.
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

//CREA, GUARDA Y DEVUELVE ARRAY CON DATOS DEL FORMULARIO.
class Repository{
    constructor(){
        //Array donde se guardan las propiedades activity (datos del formulario)
        this.activities = [];
        //Propiedad que no ingresa el usuario como dato al formulario, pero la piden.
        this.id = 0;
    }
    //Guardo las propiedades de activity (datos del formulario) en el array.
    createActivity(title, description, imgUrl){
        //agrego 1 al id cuando se ejecuta el metodo. Para que cada ves que el usuario envie el formulario y se active este metodo, se agregue 1 a id ya que id no lo ingresa el usuario y no se actualizaria
        this.id++
        //mediante la instancia puedo traer las propiedades recibidas de activity y agregarla al array.
        const actividad = new Activity(this.id, title, description, imgUrl);
        this.activities.push(actividad)
    }

    getAllActivities(){
        return this.activities;
    }

    deleteActivity(id){
        //devuelvo un array con las actividades de la instancia actividad, itero sobre dicho array y busco crear nuevo array con todas las actividades distintas a id
        this.activities = this.activities.filter(function(activity){
            //buscar el elemento recibido por parametro y devolver un nuevo array sin el.
            return activity.id !== id;
        });
    }
}

//INSTANCIA DE CLASE REPOSITORY
const repository = new Repository();

//INSTANCIA DE CLASE ACTIVITY
const activity = new Activity();

//CREO FUNCION QUE INTERPRETA LA INSTANCIA Y CONVIERTE A ELEMENTO.
function convertidor(activity){
    //Aplico 'destructuring' obteniendo las propiedades de la clase activity mediante la instancia activity.
    const {id, title, description, imgUrl} = activity

    //Creo elemento tarjeta con su estilo css y su clase
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    const h1 = document.createElement('h1');
    h1.classList.add('titulo-tarjeta')
    h1.innerText = title;
  
    const p = document.createElement('p');
    p.classList.add('texto-tarjeta')
    p.innerText = description;

    const img = document.createElement('img');
    img.classList.add('img-tarjeta')
    img.src = imgUrl;

    tarjeta.appendChild(h1);
    tarjeta.appendChild(p)
    tarjeta.appendChild(img);

    return tarjeta;
}
//SELECCIONO EL CONTENEDOR DE LA TARJETA
const contenedorTarjeta = document.getElementById('contenedor-tarjetas');

function creador(convertidor){
    contenedorTarjeta.innerHTML = "";
    const lista = repository.getAllActivities();
    const newList = lista.map(convertidor);
    newList.forEach(element => {
        contenedorTarjeta.appendChild(element);
    });
}


//EVENT LISTENER Y HANDLER
function evento(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    const inputTitulo = document.getElementById('input-titulo').value;
    const inputDescripcion = document.getElementById('input-descripcion').value;
    const inputImgUrl = document.getElementById('input-url').value;

    if (inputTitulo.trim() === '' || inputDescripcion.trim() === '' || inputImgUrl.trim() === '') {
        alert('Por favor completa todos los campos.');
        return;
    }

    repository.createActivity(inputTitulo, inputDescripcion, inputImgUrl);
    creador(convertidor);
}  

const botonAgregarActividad = document.getElementById('boton-form');

botonAgregarActividad.addEventListener('click', evento);

