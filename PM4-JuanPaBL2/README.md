# E-Commerce app | Proyecto 4 Bootcamp Henry

## Descripcion

NexusTech es una aplicacion full stack de desarrollo frontend especifico, diseñada para montar un e-commerce de tecnologia, incorporando conceptos de UX/UI para mejorar la experiencia del usuario y utilizando un esquema de AUTH para validaciones y funcionalidades especificas.
 Se compone de una aplicacion front-end construida sobre nextJS mediante una arquitectura de microfrontend y una aplicacion back-end previamente construida sobre express, node y typeORM mediante una arquitectura de microservicios.

## Tecnologias
### front:
- NextJS
- React
- Typescript
- Persistencia de datos manipulando localstorage
- Axios
- Tailwind Css
- Styled-Components
- UX/UI

### back:
- NodeJS
- Express 
- Typescript
- TypeORM


### Base de datos:
-  PostgreSQL

## Funcionalidades

- Registro de usuarios: con validaciones en inputs y logica segun errores de inputs.
- Inicio de sesion: con uso de token e items sobre localstorage para funcionalidades exclusivas de usuarios logeados.
- Filtrar productos: con texto mediante un searchbar
- Detalle de producto: ver detalle de un producto del home en una ruta apartada.
- Carrito de compras:
    - posiblidad de agregar productos al carrito.
    - posiblidad de eliminar producto agregado al carrito.
    - comprar productos.
    - ver detalle de la compra.
- Dashboard de usuario
    - informacion personal de la cuenta
    - historial de compras
    - detalle de la ultima compra
- Log Out
    -desactiva funciones, elementos, componentes y rutas exclusivos del usuario logeado.

## Instalacion

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias mediante npm install.
3. Configura las variables de entorno según sea necesario.
4. Ejecuta la app backend utilizando 'npm start'.
5. Ejecuta el servidor de la app frontend mediante 'npm run dev'.
6. Accede a la aplicación en tu navegador web mediante la URL proporcionada por el servidor.

