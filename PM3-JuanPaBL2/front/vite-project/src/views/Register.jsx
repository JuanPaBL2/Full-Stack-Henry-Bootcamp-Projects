import React from "react";
import { useState } from "react";
import axios from "axios";
import { StyledDetailsContainer, DivContainer, H2, Div, Div2, Label, Button, Input, P, Perror } from "../styles/style-components/Register-style";
//import { validate } from "../helpers/validateForm";

const Register = () => {
  //ESTADO DEL COMPONENTE
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    birthdate: '',
    dni: '',
    name: ''
  });
  //ESTADO DE CARGA
  const [isLoading, setIsLoading] = useState(false);
  //ESTADO DE FINALZIACION DE CARGA
  const [isSuccess, setIsSuccess] = useState(false);
  //ESTADO DE LOS ERRORES
  const [error, setError] = useState(null);

  //HANDLER PARA ESCUCHAR EL LLENADO DE INPUTS
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData,[name]: value});
  };
  

  //HANDLER SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      // Realizar la solicitud POST al servidor
      await axios.post('http://localhost:3001/users/register', formData);
      setIsSuccess(true);
      setError(null); // Reiniciar el error en caso de éxito
    } catch (error) {
      setError(`Error al enviar los datos de registro (${error.response.data.message})`);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledDetailsContainer>
      <DivContainer>

        <form onSubmit={handleSubmit}>

          <H2>Formulario de Registro</H2>
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
            <Label>Email</Label>
            <Input
              type="email"
              value={formData.email}
              name="email"
              placeholder="Correo electrónico"
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
          <Div>
            <Label>Nombre</Label>
            <Input
              type="text"
              value={formData.name}
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
            />
          </Div>
          <Div>
            <Label>Fecha de Nacimiento</Label>
            <Input
              type="date"
              value={formData.birthdate}
              name="birthdate"
              onChange={handleChange}
            />
          </Div>
          <Div>
            <Label>DNI</Label>
            <Input
              type="text"
              value={formData.dni}
              name="dni"
              placeholder="Documento de Identidad"
              onChange={handleChange}
            />
          </Div>
          <Button
            type="submit"
            disabled={
              isLoading || !(
                formData.username.trim() &&
                formData.password.trim() &&
                formData.email.trim() &&
                formData.birthdate.trim() &&
                formData.dni.trim() &&
                formData.name.trim()
              )
            }
          >
            {isLoading ? 'Enviando...' : 'Registrarse'}
          </Button>
          <br></br>

          {isSuccess && <P>¡Registro exitoso!</P>}
          {error && <Perror>{error}</Perror>}

        </form>
      </DivContainer>
    </StyledDetailsContainer>
  );
};

export default Register;

          

          