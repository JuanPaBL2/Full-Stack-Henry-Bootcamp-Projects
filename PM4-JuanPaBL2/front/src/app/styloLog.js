
import styled, {css} from 'styled-components';

const disabledButtonStyles = css`
  opacity: 0.6; /* Reducir la opacidad para dar una apariencia desactivada */
  pointer-events: none; /* Deshabilitar los eventos del puntero */
`;

export const StyledDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 8vw;
  padding-bottom: 8vw;
  background-color: #f2f2f2;

`;

export const ButtonContainer = styled.div`
  text-align: center; /* Centrar el contenido horizontalmente */
`;

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  width: 100%; /* Cambiar el ancho del botón al 100% */
  max-width: 250px; /* Establecer un ancho máximo para evitar que sea demasiado grande en pantallas grandes */
  padding: 18px; /* Incrementar el padding para hacer el botón más grande */
  border: none;
  border-radius: 5px;
  ${({ disabled }) => disabled && disabledButtonStyles}
  &:hover {
    transition: 0.2s;
    filter: brightness(1.2);
  }
  color: white;
  background-color: #614ad9;
  font-size: 20px;
  margin-top: 0px;
`;

export const Perror = styled.p`
  display: inline-block;
  cursor: pointer;
  width: 15%;
  border-radius: 15px;
  background-color: red;
  color: white;
  padding: 5px;
  margin-top: 8px;
`;

export const P = styled.p`
  display: inline-block;
  margin-top: 8px;
  border-radius: 15px;
  background-color: green;
  color: white;
  padding: 5px;
`;

export const SpanLink = styled.span`
  color: black;
  &:hover {
    transition: 0.1s;
    color: #f7d02c; 
  }
  `

export const DivContainer = styled.div`
  display: inline-block;
  border-top: 30px solid #614ad9;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  padding: 20px;
  padding-top: 5px;
  font-family: 'Encode Sans Expanded';
  text-align: center;
  width: 50%; /* Ancho del contenedor del formulario */
`;

export const H2 = styled.h2`
  padding-bottom: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 75px;
  color: #614ad9;
`;

/*export const H4 = styled.h1`
  font-style: normal;
  color: white;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  font-family: 'Encode Sans Expanded';
  text-align: center;
`;*/

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
  width: 70%; 
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  &:hover {
    border: 1px solid #614ad9; 
  }
  &:focus {
    border: 1px solid #614ad9; /* Cambia el color del borde al enfocar el input */
    outline: none; /* Quita el borde predeterminado del input cuando está enfocado */
  }
`;

export const DivAun = styled.div`
  display: inline-block;
  margin: 0px;
  padding-bottom: 2vw;
  padding-top: 20px;
`;

