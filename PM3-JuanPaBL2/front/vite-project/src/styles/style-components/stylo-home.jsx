import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px;
  background-color: #f7f7f7;
  height: full;
`;

export const SectionTitle = styled.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const SectionSubtitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: #555;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const CardTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const CardNumber = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2rem;
  color: #604ad8;
`;

export const FooterContainer = styled.footer`
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  padding: 10px;
  background-color: #333;
  color: #fff;
  margin-top: auto; /* Asegura que el footer esté al final de la página */
`;