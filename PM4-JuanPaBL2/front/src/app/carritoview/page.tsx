'use client'
import React from "react";
//hooks
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//interfaz date
import { IProduct } from "@/interfaces/interfazProducts";
//funcion req http
import { despacharCompraReq } from "@/utils/despacharCompra";
//modales
import { Component, Component2 } from "@/componentes/modal/client";
import Link from "next/link";


const Carrito: React.FC = ():React.ReactNode => {
    const router = useRouter();

    const [cart, setCart] = useState<IProduct[]>([]);
    const [token] = useState(localStorage.getItem("userToken") ?? null); 
    const [isSucces, setItSucces] = useState(false);
    const [errorState, setError] = useState(null)
    const [detailOk, setDetailok] = useState(false)
    

    useEffect(() => {
        const cartFromLocalStorage = localStorage.getItem("newCart");
        if (cartFromLocalStorage) {
            setCart(JSON.parse(cartFromLocalStorage));
        }
    }, []);


    const despacharCompra = () => { 
        despacharCompraReq(cart, token, setCart, setItSucces, setError, setDetailok)
    };


     //si el token del usuario se borra por el log out, el carrito se vacia y redirige a home.
     useEffect(() => {
        if (!token) {
            localStorage.removeItem("newCart");
            router.push("/")
        } 
    }, []);

    return (
        
        <div className="bg-customGray min-h-screen">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
                {/* Tarjeta de resumen de compra */}
                <div className="bg-white shadow-lg rounded-lg p-2 mb-4 md:mr-4 md:w-1/3">
                    <h1 className="text-xl font-semibold mb-2">Resumen de Compra</h1>
                    <hr></hr>
                    <br></br>
                    <h3 className="text-gray-600 mb-2">Cantidad de productos: {cart.length}</h3><br></br><br></br><br></br><br></br>
                    {isSucces && <Component/>} 
                    {errorState && <Component2 error={errorState} />}
                    {detailOk ? ( 
                        <Link href="userdashboard/userdetailbuy" className="bg-green-500 text-white px-4 py-2 mb-0 rounded hover:bg-green-500">Detalle de Compra</Link>
                        ):
                        (<button onClick={despacharCompra} className="bg-blue-500 text-white px-4 py-2 mb-0 rounded hover:bg-blue-600">Comprar</button>)    
                    }
                </div>
                {/* Tarjeta del carrito */}
                <div className="bg-white shadow-lg rounded-lg p-2 md:w-2/3">
                    <h1 className="text-2xl font-semibold mb-4">Carrito de Compras</h1>
                    <hr></hr>
                    <div className="grid grid-cols-1 content-center md:grid-cols-2 lg:grid-cols-3 gap-4">
                        
                        {cart.map((product) => (
                            <div key={product.id} className="bg-white items-center shadow-lg rounded-lg p-4">
                                <img src={product.image} alt={product.name} className="object-cover mb-4 w-1/4" />
                                <h2 className="text-lg font-semibold px-2">{product.name}</h2>
                                <div className="flex justify-between items-center  mt-4">
                                    <span className="text-gray-600 px-2">Cantidad: 1</span>
                                    <span className="text-gray-600 px-2">price: </span> <p className="text-mlgray">${product.price}</p>

                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carrito;