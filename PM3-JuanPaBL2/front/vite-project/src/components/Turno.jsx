import React from "react";
import { StyledDetailsContainer, DivContainer, SpanContainer, H1, SpanSt, Button} from "../styles/style-components/Turn-style";
import { useState } from "react";
import axios from "axios";

const Turno = ({id, date, time, status}) => {

    const [cancelBoton, setCancelBoton] = useState(status);

    const handlerButton =  async () => {
        try {
            await axios.put(`http://localhost:3001/turn/cancel/${id}`);
            setCancelBoton("cancelled");
        } catch (error) {
            alert(error)
        }   
    }

    return (   
        <StyledDetailsContainer>
                <DivContainer>
                        <H1>DETALLES DEL TURNO</H1>
                        <SpanContainer> id: {id}</ SpanContainer> 
                        <SpanContainer> date: {date}</ SpanContainer> 
                        <SpanContainer> time: {time}</SpanContainer>  
                        <SpanContainer> status: <SpanSt status={cancelBoton}>{cancelBoton}</SpanSt></SpanContainer> 
                        <Button disabled={cancelBoton === "cancelled"} onClick={handlerButton}>CANCELAR TURNO</Button>     
                </DivContainer>
        </StyledDetailsContainer>   
    )
}

export default Turno;