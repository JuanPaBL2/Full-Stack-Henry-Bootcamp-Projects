'use client'
import React from "react";
import {Div, SpanLink, DivContainer, StyledDetailsContainer, H2, Input, DivAun, Button, ButtonContainer, P, Perror} from '../styloLog'
import Link from "next/link";
import { useState, useEffect } from "react";
import { Login } from "@/interfaces/interfazProducts";
import { loginUser } from "@/utils/login";
import { useRouter } from "next/navigation";


export const LoginComponent: React.FC = (): React.ReactNode => {
  //ESTADOS
  const [formData, setFormData] = useState<Login>({
    email: '',
    password: '',
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorState, setError] = useState(null);
  //ESTADO DEL TOKEN. Actualiza el valor del token y luego aplica metodo para guardar en localStorge
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);


  useEffect(() => {
    //si el token cambia de estado, se atcualiza el token en el localstorage
    if (token) {
      localStorage.setItem("userToken", token);
    } else {
      localStorage.removeItem("userToken");
    }
    //useEffect ejecutara los metodos setItem y removeItem con el token
    //solo solo si cambia el valor de token
  }, [token]);


  //event handler llenado de inputs de formulario
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //event handler envio de formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    loginUser(formData, setToken, setError, setIsSuccess, setIsLoading);
    setTimeout(() => {
      router.push("/");
    }, 3000)
  };

 
  return (
    
    <StyledDetailsContainer>
      <DivContainer><H2>Iniciar Sesión</H2>
        <form onSubmit={handleSubmit}>
          <Div>
            <Input
              type="text"
              value={formData.email}
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </Div>
          <Div>
            
            <Input
              type="password"
              value={formData.password}
              name="password"
              placeholder="*******"
              onChange={handleChange}
            />
          </Div>
          <DivAun>
            ¿Aún no te registraste? <br/><br/>
            <Link href='/register'><SpanLink>Registrarse</SpanLink></Link><br></br>
          </DivAun>
          <ButtonContainer>
            <Button
              type="submit"
              disabled={
                isLoading ||
                !(formData.email.trim() && formData.password.trim())
              }
            >
              {isLoading ? 'Enviando...' : 'Iniciar Sesión'}
            </Button>
          </ButtonContainer>
          {isSuccess && <P>¡Login exitoso! <br/> redirigiendo a home...</P> }
          {errorState && <Perror> {errorState} </Perror>}
        </form>
      </DivContainer>
    </StyledDetailsContainer>
  );
};

export default LoginComponent;