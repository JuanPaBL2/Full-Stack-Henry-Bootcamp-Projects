import styled from 'styled-components';

export const StyledDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const Perror = styled.p`
  border-radius: 15px;
  display: inline-block;
  background-color: red;
  color: white;
  padding: 5px;
`;

export const P = styled.p`
  border-radius: 15px;
  display: inline-block;
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

export const Button = styled.button`
  cursor: pointer;
  width: 30%;
  padding: 12px; /* Incrementar el padding para hacer el botón más grande */
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #1c192a; /* Cambiar el color de fondo al pasar el mouse */
    color: white;
  }
  color: black;
  font-size: 18px; /* Incrementar el tamaño de la fuente */
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 100%; /* Ancho del input al 100% */
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box; /* Incluir el padding en el ancho total */
  margin-bottom: 10px; /* Espaciado inferior entre inputs */
`;
