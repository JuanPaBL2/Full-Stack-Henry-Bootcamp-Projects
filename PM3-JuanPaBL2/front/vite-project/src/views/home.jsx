import Navbar from '../components/Navbar'
import React from 'react'
import Register from './Register'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import { MisTurnos } from './MisTurnos'
import CreateTurn from './CreateTurn'
import { Section, SectionTitle, SectionSubtitle, CardContainer, Card, CardTitle, CardNumber } from '../styles/style-components/stylo-home'


export const Home = () => {

    return (
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home2/>}></Route>
          <Route path='/newturn' element={<CreateTurn/>}></Route>
          <Route path='/login' element={ <Login/>}></Route>
          <Route path='/register' element={ <Register/>} ></Route>
          <Route path='/Misturnos' element={<MisTurnos/>}></Route>
        </Routes>
      </>
    );
}

export const Home2 = () => {
  return (
    <>
      {/* Primera sección */}
      <Section>
        <SectionTitle>Reconocidos como un banco sólido  <br></br> y confiable en el sector financiero. <br></br> <br></br></SectionTitle>
        <br></br> <SectionSubtitle>
        Ofrecemos una amplia gama de servicios bancarios diseñados para <br></br>satisfacer las necesidades financieras de nuestros clientes.
        </SectionSubtitle>
      </Section>
      
      {/* Segunda sección */}
      <Section>
        <CardContainer>
          <Card>
            <CardTitle>Total Clientes</CardTitle>
            <CardNumber>1000</CardNumber>
          </Card>
          <Card>
            <CardTitle>Préstamos Activos</CardTitle>
            <CardNumber>500</CardNumber>
          </Card>
          <Card>
            <CardTitle>Cuentas Abiertas</CardTitle>
            <CardNumber>1200</CardNumber>
          </Card>
          <Card>
            <CardTitle>Inversiones</CardTitle>
            <CardNumber>$1,000,000</CardNumber>
          </Card>
        </CardContainer>
      </Section>
    </>
  );
};

export default Home;


  