'use client'
import React,  {useState } from 'react';
import { StyledDetailsContainer, DivContainer, H2, Div, Label, Button, Input, P, Perror } from '../stylo';
import validate from '@/utils/validate';
import registerUser from '@/utils/register';
import { useRouter } from 'next/navigation';

const Register: React.FC = (): React.ReactNode => {

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    address: '',
    phone: '',
    role: '',
    email: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    //VALIDACION DE INPUTS CON EL ESTADO ACTUALIZADO
    const newErrors = validate({ ...formData, [name]: value }); //envio obeto que contiene los datos del form actualizados
    //SETEO DE ERRORES CON OBJETO DEVUELVO POR 'VALIDATE'
    setErrors({ ...errors, [name]: newErrors[name] || '' }); //actualiza el estado de errores con los errores encontrados, de no haber 
                                                            //errores, se establece cadena vacia como valor del error.
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    registerUser(formData, setIsSuccess, setErrors, router, errors, setIsLoading);
  };

  return (
    <StyledDetailsContainer>
      <DivContainer>
        <form onSubmit={handleSubmit}>
          <H2>Registrarse</H2>
          <Div>
            
            <Input type="text" value={formData.name} name="name" placeholder="Usuario" onChange={handleChange} error={!!errors.name} />
            {errors.name && <Perror>{errors.name}</Perror>}
          </Div>
          <Div>
            
            <Input type="email" value={formData.email} name="email" placeholder="Correo electrónico" onChange={handleChange} error={!!errors.email} /><br></br>
            {errors.email && <Perror>{errors.email}</Perror>}
          </Div>
          <Div>
           
            <Input type="password" value={formData.password} name="password" placeholder="*******" onChange={handleChange} error={!!errors.password} />
            {errors.password && <Perror>{errors.password}</Perror>}
          </Div>
          <Div>
           
            <Input type="text" value={formData.address} name="address" placeholder="Dirección" onChange={handleChange} error={!!errors.address} />
            {errors.address && <Perror>{errors.address}</Perror>}
          </Div>
          <Div>
            
            <Input type="text" value={formData.phone} name="phone" placeholder="phone number" onChange={handleChange} error={!!errors.phone} />
            {errors.phone && <Perror>{errors.phone}</Perror>}
          </Div>
          <Div>
            
            <Input type="text" value={formData.role} name="role" placeholder="Rol" onChange={handleChange} error={!!errors.role} />
            {errors.role && <Perror>{errors.role}</Perror>}
          </Div>
          <Button
            type="submit"
            disabled={
              isLoading ||
              Object.values(formData).some((value) => !value.trim()) ||
              Object.values(errors).some((error) => !!error)
            }
          >
            {isLoading ? 'Enviando...' : 'Registrarse'}
          </Button><br></br>
          {isSuccess && <P>¡Registro exitoso!</P>}
          {!isSuccess && errors.submit && <Perror>{errors.submit}</Perror>}
          
        </form>
      </DivContainer>
    </StyledDetailsContainer>
  );
};

export default Register;
