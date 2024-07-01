# App de servicio de peliculas | Proyecto 2 Bootcamp Henry

## Descripcion
App Full Stack sobre un servicio de peliculas. Desarrollada con HTML, Javascript Vanilla, y CSS + Boostrap del lado del frontend; y NodeJS, Express y Moongose del lado del backend.

## Tecnologias
### Front:
- HTML
- CSS
- Boostrap
- Javascript
- Axios
- Webpack bundle

### Back:
- NodeJS
- Express
- Dotenv
- Middlewares pre-build (Morgan y Cors) + Middlewares personalizados
- Moongose

### Base de datos:
- MongoDB

### Arquitectura:
-  back: microservicios

## Funcionalidades

- Renderiza una tarjeta de presentacion de una pelicula, por cada documento de datos de peliculas existente en una base de datos NoSQL
- Permite acceder a otras paginas similares con diferente tematica.
- Permite al usuario crear una tarjeta de presentacion de pelicula mediante el llenado de un formulario, esto se postea en la bd y finalmente se renderiza en el home donde se encuentran las demas tarjetas.

## Instalacion

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias mediante 'npm install'.
3. Configura las variables de entorno según sea necesario.
4. Ejecutar 'npm start' sobre /src de la app backend.
5. Ejecuta 'npm start' sobre /front o utiliza 'live server' sobre el archivo html, en la app frontend.
6. Accede a la aplicación en tu navegador web mediante la URL proporcionada por el servidor.
