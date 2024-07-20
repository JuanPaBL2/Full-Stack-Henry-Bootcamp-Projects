import React, { useEffect, useState } from "react";
import Turno from "../components/Turno";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveUserAppointments } from "../redux/reducer";
import { PTrun } from "../styles/style-components/Turn-style";


export const MisTurnos = () => {
  const userGlobal = useSelector((state) => state.userSave);
  const userTurns = useSelector((state) => state.userAppointments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userGlobal) {
      // Si no hay usuario logueado, redirigir a la página de inicio (Home)
      navigate('/');
    } else {
      // Si hay usuario logueado, obtener los turnos correspondientes al usuario
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/users/${userGlobal.user.id}`);
          dispatch(saveUserAppointments(response.data.turnos));
         
        } catch (error) {
          console.log(`Error al solicitar datos: ${error.message}`);
          
        }
      };
      fetchData();
    }
  }, []);

  return (
    
    <>
      {userTurns.length ? (
        userTurns.map((turno) => (
          <Turno
            key={turno.id}
            id={turno.id}
            date={turno.date}
            time={turno.time}
            status={turno.status}
          />
        ))
      ) : (
        <PTrun>no hay turnos agendados.  </PTrun> )}
       
    </>
  );
};