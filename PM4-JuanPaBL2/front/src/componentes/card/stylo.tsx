'use client'
import styled from 'styled-components';

export interface Colorete {
  colors: boolean;
}

export const baseCardWidth = "calc(33.33% - 20px)";; // 2 columnas para dispositivos móviles por defecto

// Media queries para tamaños específicos de pantalla
export const tabletBreakpoint = "768px";
export const desktopBreakpoint = "1024px";

/*export const Card = styled.div<Colorete>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px; 
  width: ${baseCardWidth};
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  text-align: center;
  border-top: 7px solid ${({ colors }) => (colors ? 'green' : '#614ad9' )};
  @media (min-width: ${tabletBreakpoint}) {
    width: calc(33.33% - 30px);
    justify-content: center;
  }

  @media (min-width: ${desktopBreakpoint}) {
    width: calc(20% - 40px);
  }
  @media (min-width: 344px) and (max-width: 460px){
   width: 33%;
  }
`*/

export const Card = styled.div<Colorete>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 20px; /* Cambiar el margen de 4vw a un valor fijo */
  width: ${baseCardWidth};
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  text-align: center;
  border-top: 7px solid ${({ colors }) => (colors ? 'green' : '#614ad9' )};

  @media (min-width: ${tabletBreakpoint}) {
    width: calc(33.33% - 30px);
  }

  @media (min-width: ${desktopBreakpoint}) {
    width: calc(20% - 40px);
  }
`;

export const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 20px; /* Cambiar el margen de 4vw a un valor fijo */
  width: ${baseCardWidth};
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  text-align: center;
  border-top: 7px solid #614ad9;

  @media (min-width: ${tabletBreakpoint}) {
    width: calc(33.33% - 30px);
  }

  @media (min-width: ${desktopBreakpoint}) {
    width: calc(20% - 40px);
  }
  
  @media (min-width: 344px) and (max-width: 460px){
   width: 70%;
  }
`;

export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 20px; /* Cambiar el margen de 4vw a un valor fijo */
  width: ${baseCardWidth};
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
  text-align: center;
  border-left: 7px solid #614ad9; /* Color del borde superior */

  @media (min-width: ${tabletBreakpoint}) {
    width: calc(53.33% - 30px);
  }

  @media (max-width: 450px) and (min-width: 344px) and (max-height: 950px) and (min-height: 667px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${desktopBreakpoint}) {
    width: calc(55% - 40px);
  }
`;


export const CardTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 10px;
  @media (max-width: 458px) and (min-width: 344px) and (max-height: 950px) and (min-height: 667px) {
    font-size: 0.9rem;
    border-radius: 20px;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;

export const ProductImage2 = styled.img`
  width: 100%;
  height: 100%;
  padding: 1px /* Añadir un margen de 10px para dejar espacio alrededor de la imagen */
  @media (max-width: 450px) and (min-width: 344px) and (max-height: 950px) and (min-height: 667px) {
    width: 100%;
    height: 100%;
  }
 
`

export const CardNumber = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  @media (max-width: 450px) and (min-width: 344px) and (max-height: 950px) and (min-height: 667px) {
    font-size: 0.7rem;
    border-radius: 20px;
  }
`;

export const ButtonCardi = styled.button<Colorete>`
 background-color: ${({ colors }) => (colors ? 'green' : '#614ad9' )};
 color: white;
 border-radius: 60px;
 padding: 5px;
 margin-top: 10px;
 @media (max-width: 450px) and (min-width: 344px) and (max-height: 950px) and (min-height: 667px) {
    font-size: 0.7rem;
    border-radius: 20px;
    padding: 3px;
  }
 &:hover {
  filter: brightness(1.3);
  }
  `;
  export const ButtonCardiTwo = styled.button`
  background-color: #614ad9;
  color: white;
  border-radius: 60px;
  padding: 5px;
  margin-top: 10px;
  @media (max-width: 450px) and (min-width: 344px) and (max-height: 950px) and (min-height: 667px) {
    font-size: 0.7rem;
    border-radius: 20px;
  }
  &:hover {
   filter: brightness(1.3);
   }
  `;
 