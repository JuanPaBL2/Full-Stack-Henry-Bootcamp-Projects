# Servicio de turnos App | Proyecto 3 Bootcamp Henry

## Descripcion

App full stack sobre un servicio de turnos de un hipotetico establecimiento (en este caso un banco a modo ilustrativo), montada en el entorno de ejecucion vite, utilizando react y tambien se incorpora redux para principalmente poder utilizar un estado global en la app y del lado del backend sobre nodeJS, utilizando express y typeORM.

## Tecnologias
### Front:
-  Vite
-  React
-  Redux toolkit
-  Typescript
-  Axios
-  Styled Components

### Back:
-  NodeJS
-  Express
-  Typescript
-  Dotenv
-  Middlewares pre-build (morgan y cors)
-  TypeORM
-  Documentacion de API: Swagger

### Base de datos:
-  PostgreSQL

### Arquitectura:
-  back: microservicios


## Funcionalidades

- Registro de usuario 
- Log in de usuario, desbloquea vista y funcionalidad de turnos
- Agendar un turno, con validacion de fechas habiles
- Vista de los turnos
- Posibilidad de cancelar el turno y ver el estado del mismo

## Instalacion

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias mediante npm install.
3. Configura las variables de entorno según sea necesario.
4. Ejecutar 'npm start' sobre /src de la app backend.
5. Ejecuta 'npm run dev' sobre /vite-project de la app frontend.
6. Accede a la aplicación en tu navegador web mediante la URL proporcionada por el servidor.
