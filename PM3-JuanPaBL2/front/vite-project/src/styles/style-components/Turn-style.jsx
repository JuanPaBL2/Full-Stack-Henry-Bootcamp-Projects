import styled from 'styled-components';

export const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 80px; 
`;

export const DivContainer = styled.div`
  display: inline-block;
  border: 2px solid black;
  border-radius: 15px;
  padding: 20px;
  padding-top: 5px;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-align: center;
`

export const SpanContainer = styled.span`
  margin-right: 10vw
  text-align: center;
  padding: 40px;
  padding-top: 20px;
  `
export const H1 = styled.h1`
  padding-bottom: 20px;
`

export const SpanSt = styled.span`
color: ${prop => prop.status === 'active' ? 'green' : 'red'}
`

export const Button = styled.button`
  cursor: pointer;
  width: 35%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  
  &:hover {
    background-color: red;
    transition: background-color 0.3s ease;
  }
  color: white;
  background-color: black;
  font-size: 16px;
  margin-top: 20px;
`;

export const PTrun = styled.p`
 font-size: 4vw;
 font-family: "Plus Jakarta Sans", sans-serif;
 margin-top: 200px;
 text-align: center;
 
`

