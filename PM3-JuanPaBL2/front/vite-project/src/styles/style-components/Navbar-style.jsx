import styled from 'styled-components';

//DEFINIR ESTILOS CON STYLE-COMPONENTS
export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8rem;
  background-color: #222;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
  margin-top: 0px
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  padding-left: 20px;
  
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  
`;

export const MenuItem = styled.li`
  padding: 0.5rem 1rem;
  margin-right: 3rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Plus Jakarta Sans", sans-serif;

  &:hover {
    transform: translateY(-3px);
    filter: brightness(100);
  }
  
`;

export const SpanBank = styled.span`
  color: #604AD8;
`