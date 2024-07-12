'use client'
import { useState, useEffect } from "react";
import React from "react";
//COMPONENTES
import Card from "@/componentes/CardContentor/page";
//STYLE
import {StrikethroughText, StyledHeading} from "@/componentes/navbar/stylo2";
//IMAGENES DE CARRUSEL
import { images } from "@/utils/images";


export default function Home() {
  //LOGICA PARA CARRUSSEL DEL BANNER
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //ESTADO QUE OBTIENE BOOLEANO DEL LOGIN, A FIN DE ACTUALIZAR LA PAGINA.
  const [logStatus, setLogStatus] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loginStatus = localStorage.getItem("LoginStatus") || "false";
      if (loginStatus === "true") {
        localStorage.removeItem("LoginStatus");
        setLogStatus(true);
        window.location.reload();
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  //FIN DE LOGICA CARRUSSEL
  
  return (
    <>
    {/*CARRUSSEL BANNER */}
      
        <div className="carousel-container relative w-full h-96 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
                index === currentImageIndex ? "translate-x-0" : "-translate-x-full"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={prevImage}
          >
            {"<"}
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={nextImage}
          >
            {">"}
          </button>
        </div>
        
        {/*CARD*/}
        <div className=" bg-customGray "> 
          <div className="flex flex-col items-center pt-8">
            <StyledHeading className="pb-10">
              <b>Echa un vistazo a estas <StrikethroughText>ofertas</StrikethroughText></b>
            </StyledHeading>
            <img className="w-8 h-8" src="https://cdn.icon-icons.com/icons2/1673/PNG/512/arrowiosdownwardoutline_110713.png" alt="Arrow Icon"/>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start">
            <Card />
          </div> 
          <hr/>


          {/*CARD2*/}
          <div className="flex flex-col items-center pt-8">
            <StyledHeading className="pb-10">
              <b>productos <StrikethroughText>destacados</StrikethroughText></b>
            </StyledHeading>
            <img className="w-8 h-8" src="https://cdn.icon-icons.com/icons2/1673/PNG/512/arrowiosdownwardoutline_110713.png" alt="Arrow Icon"/>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start">
            <Card />
          </div>

        </div>
      </>
      
    );
}