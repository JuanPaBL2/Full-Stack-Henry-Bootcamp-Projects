import styled from 'styled-components';
import { IMenuProps } from '@/interfaces/interfazProducts';

export const StyledHeading = styled.h2`
  position: relative;
  font-family: 'Plus Jakarta Sans', 
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    background-color: #f7d02c;
    z-index: 1;
  }
`;

export const StrikethroughText = styled.span`
  color: #614ad9;
  position: relative;
  z-index: 2;
`;

export const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-radius: 25px;
  border: 1px solid #ccc;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInputBurger = styled.input<IMenuProps>`
  display: none;
  @media (max-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 25px;
    border: 1px solid #ccc;
    margin-top: 10px;
    color: black;
    display: ${({ isOpen }) => (isOpen && "flex")}; 
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2%;
  
  background-color: #614ad9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 4%;
  }
`;

export const ImageContainer = styled.div`
  margin-right: 10vw;
  width: 30px;
  @media (max-width: 768px) {
    width: 20%; 
    height: 20%; 
  }
`;

export const Img = styled.img`
  cursor: pointer;
 
`;

export const Logo = styled.h1`
  display: flex;
  margin-left: 5%;
  justify-content: row;
  font-family: 'encode sans expanded', sans-serif;
  font-size: 1.8rem;
  color: white;
  font-weight: 550;
`;


export const MenuButton = styled.div`
  display: none; /* Se oculta en pantallas grandes */
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    transition: transform 0.3s ease;
    color: white;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    display: flex; /* Se muestra en dispositivos móviles */
    margin-left: 15%;
    color: white;
  }
`;

export const Menu = styled.ul<IMenuProps>`
  display: flex;
  list-style: none;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;
    margin-left: 20px;
  }
`;

export const MenuItemCarrito = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
  margin-right: 20px;
  cursor: pointer;
  padding-bottom: 0px;
  &:hover {
    color: #f7d04e;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const MenuItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
  margin-right: 20px;
  cursor: pointer;
  padding-bottom: 0px;
  &:hover {
    color: #f7d04e;
    border-bottom: 1px solid white;
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center; /* Alinea verticalmente los elementos */
   @media (max-width: 768px) {
   display: none;
   }
`;
