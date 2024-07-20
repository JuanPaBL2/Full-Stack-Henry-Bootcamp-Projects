import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledDetailsContainer, Perror, P, DivContainer, H2, Div, Label, Button, Input } from '../styles/style-components/CreateTurn-style';
import { isWeekDay } from '../helpers/validateForm';


const CreateTurn = () => {
  const userGlobal = useSelector((state) => state.userSave);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fecha: '',
    hora: '',
    id: userGlobal.user.id 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userGlobal) {
      navigate('/');
    }
  }, [userGlobal, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { fecha, hora, id } = formData;

    if (!isWeekDay(fecha)) {
      setError('No se puede agendar turnos para fines de semana (sábado o domingo).');
      return;
    }
    
    setIsLoading(true);


    try {
        
        const turnData = {
            date: fecha,
            time: hora,
            id: id
          };
        const response = await axios.post('http://localhost:3001/turn/schedule', turnData)
        setIsSuccess(true);
        setError(null);
    } catch (error) {
        setError(`Error al crear el turno (${error.response.data.error})`);
        setIsSuccess(false);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <StyledDetailsContainer>
      <DivContainer>
        <form onSubmit={handleSubmit}>
          <H2>Agendar un turno</H2>
          <Div>
            <Label>Fecha</Label>
            <Input
              type="date"
              value={formData.fecha}
              name="fecha"
              placeholder="Fecha"
              onChange={handleChange}
            />
          </Div>
          <Div>
            <Label>Hora</Label>
            <Input
              type="time"
              value={formData.hora}
              name="hora"
              placeholder="Hora"
              onChange={handleChange}
            />
          </Div>
          <Button
            type="submit"
            disabled={isLoading || !(formData.fecha.trim() && formData.hora.trim())}
          >
            {isLoading ? 'Enviando...' : 'Agendar turno'}
          </Button>
          {isSuccess && <P>¡Turno agendado exitosamente!</P>}
          {error && <Perror>{error}</Perror>}
        </form>
      </DivContainer>
    </StyledDetailsContainer>
  );
};

export default CreateTurn;