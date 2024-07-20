import React  from 'react';
import axios from 'axios';
import { useState } from 'react';
import { StyledDetailsContainer, DivContainer, H2, Div, Div2, Label, Button, Input, P, Perror, DivAun, ButtonContainer } from "../styles/style-components/Login-style";

import {useDispatch} from 'react-redux';


import { saveUserLogin } from '../redux/reducer';
import { Link } from 'react-router-dom';


const Login = () => {

  //HOOK DISPATCH ENVIA INFO AL ESTADO GLOBAL
  const dispatch = useDispatch();

  //ESTADOS DEL COMPONENTE
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  //HANDLER PARA ESCUCHAR EL LLENADO DE INPUTS
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData,[name]: value});
  };
  
  //HANDLER SUBMIT Y REQUEST
  const handleSubmitRequest = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
        const response = await axios.post('http://localhost:3001/users/login', formData); 
        
        //PASO LA RESPUESTA DEL BACK AL DISPATCH + LA ACCION, PARA QUE LA ENVIE AL ESTADO GLOBAL.
        dispatch(saveUserLogin(response.data))

        setIsSuccess(true);
        setError(null);
    } catch (error) {
        setError(`Error al enviar los datos de login (${error.response.data.error})`);
        console.log(error);
        setIsSuccess(false);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <StyledDetailsContainer>
      <DivContainer>

        <form onSubmit={handleSubmitRequest}>

          <H2>Formulario de Login</H2>
          <Div>
            <Label>Username</Label>
            <Input
              type="text"
              value={formData.username}
              name="username"
              placeholder="Usuario"
              onChange={handleChange}
            />
          </Div>
          <Div>
            <Label>Password</Label>
            <Input
              type="password"
              value={formData.password}
              name="password"
              placeholder="*******"
              onChange={handleChange}
            />
          </Div>
          <DivAun>
            ¿aun no te registraste? <br></br>
            <Link to='/register'><p>hacelo acá</p></Link><br></br>
          </DivAun>
          <ButtonContainer>
            <Button
              type="submit"
              disabled={
                isLoading || !(
                  formData.username.trim() &&
                  formData.password.trim()
                )
              }
            >
              {isLoading ? 'Enviando...' : 'Logearse'}
            </Button>
          </ButtonContainer>
          {isSuccess && <P>¡Login  exitoso!</P>}
          {error && <Perror>{error}</Perror>}
        </form>
      </DivContainer>
    </StyledDetailsContainer>
  );
};


export default Login;