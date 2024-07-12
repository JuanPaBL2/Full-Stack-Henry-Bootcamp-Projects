
import styled, { css } from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}
const disabledButtonStyles = css`
  opacity: 0.6; /* Reducir la opacidad para dar una apariencia desactivada */
  pointer-events: none; /* Deshabilitar los eventos del puntero */
`;

export const StyledDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4vw;
  padding-bottom: 8vw;
  background-color: #f2f2f2;
  @media (max-width: 450px) and (min-width: 300px) and (max-height: 950px) and (min-height: 667px) {
   padding-top: 15vw;
   padding-bottom: 8vw;
  }
`;

export const Perror = styled.p`
  border-radius: 15px;
  display: inline-block;
  background-color: red;
  color: white;
  padding: 5px;
  @media (max-width: 450px) and (min-width: 300px) and (max-height: 950px) and (min-height: 667px) {

  }
`;

export const Perror2 = styled.p`
  border-radius: 15px;
  display: inline-block;
  background-color: red;
  color: white;
  padding: 5px;
  @media (max-width: 450px) and (min-width: 300px) and (max-height: 950px) and (min-height: 667px) {
    
  }
`;


export const P = styled.p`
  border-radius: 15px;
  display: inline-block;
  background-color: green;
  color: white;
  padding: 5px;
  @media (max-width: 450px) and (min-width: 300px) and (max-height: 950px) and (min-height: 667px) {
    
  }
`;

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
  width: 70%; /* Ancho del contenedor del formulario */ 
`;

export const H2 = styled.h2`
  padding-bottom: 30px;
  font-style: normal;
  color: black;
  font-weight: 500;
  font-size: 40px;
  line-height: 75px;
  font-family: 'Encode Sans Expanded';
  text-align: center;
  color: #614ad9;
  @media (max-width: 450px) and (min-width: 300px) and (max-height: 950px) and (min-height: 667px) {
    font-size: 22px;
  }`


export const Div = styled.div`
  padding-bottom: 10px;
`;

export const Div2 = styled.div`
  padding-bottom: 20px;
`;

export const Label = styled.label`
  padding-right: 30px;
`;

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  width: 70%;
  max-width: 250px;
  padding: 18px; /* Incrementar el padding para hacer el botón más grande */
  border: none;
  border-radius: 5px;
  background-color: #614ad9;
  ${({ disabled }) => disabled && disabledButtonStyles}
  &:hover {
    filter: brightness(1.3); /* Aumentar el brillo al 120% */
  }
  color: white;
  font-size: 18px; /* Incrementar el tamaño de la fuente */
  margin-top: 20px;
  @media (max-width: 450px) and (min-width: 300px) and (max-height: 950px) and (min-height: 667px) {
    font-size: 13px;
    padding: 18px;
    border-radius: 5px;
    width: 50%;
  }
`;

export const Input = styled.input<InputProps>`
  width: 70%; /* Ancho del input al 100% */
  padding: 12px;
  border-radius: 5px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#ccc')}; /* Cambiar el color del borde si hay un error */
  box-sizing: border-box; /* Incluir el padding en el ancho total */
  margin-bottom: 10px; /* Espaciado inferior entre inputs */
  color: black;
  outline: none;
  &:hover {
    border: 1px solid ${({ error }) => (error ? 'red' : '#614ad9')};
    outline: none;
  }
  &:focus {
    border: 1px solid  ${({ error }) => (error ? 'red' : '#614ad9')}; /* Cambia el color del borde al enfocar el input */
    outline: none; /* Quita el borde predeterminado del input cuando está enfocado */
  }
  @media (max-width: 450px) and (min-width: 300px) and (max-height: 950px) and (min-height: 667px) {
    font-size: 15px;
    width: 90%;
  }
    
`;
