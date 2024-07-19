import styled from 'styled-components';

export const StyledDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const ButtonContainer = styled.div`
  text-align: center; /* Centrar el contenido horizontalmente */
`;

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  width: 50%; /* Cambiar el ancho del botón al 100% */
  max-width: 250px; /* Establecer un ancho máximo para evitar que sea demasiado grande en pantallas grandes */
  padding: 12px; /* Incrementar el padding para hacer el botón más grande */
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #1c192a; /* Cambiar el color de fondo al pasar el mouse */
    color: white;
  }
  color: black;
  font-size: 16px;
  margin-top: 0px;
`;

export const Perror = styled.p`
  border-radius: 15px;
  background-color: red;
  color: white;
  padding: 5px;
`;

export const P = styled.p`
  border-radius: 15px;
  background-color: green;
  color: white;
  padding: 5px;
  width: 50%;
`;

export const DivContainer = styled.div`
  color: white;
  border: 2px solid black;
  border-radius: 15px;
  padding: 20px;
  padding-top: 5px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  text-align: center;
  background-color: #614bd9; /* Color de fondo constante */
  width: 80%; /* Ancho del contenedor del formulario */

  /* Establecer transición suave para el cambio al pasar el mouse */
  transition: filter 0.3s ease;

  /* Cambiar el filtro al pasar el mouse */
  &:hover {
    filter: brightness(1.1); /* Aumentar el brillo al 120% */
  }
`;


export const H2 = styled.h2`
  padding-bottom: 20px;
`;

export const Div = styled.div`
  padding-bottom: 10px;
`;

export const Div2 = styled.div`
  padding-bottom: 20px;
`;

export const Label = styled.label`
  padding-right: 30px;
`;

export const Input = styled.input`
  width: 50%; /* Ancho del input al 100% */
  padding: 12px; /* Incrementar el padding para hacer el input más grande */
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const DivAun = styled.div`
  display: inline-block;
  margin: 0px;
  padding-bottom: 0px;
  padding-top: 20px;
`;
