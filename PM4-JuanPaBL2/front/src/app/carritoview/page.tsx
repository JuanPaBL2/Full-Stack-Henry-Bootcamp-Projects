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
    const [cartPrice, setCartPrice] = useState<number | null>(null);
    //const [token] = useState(localStorage.getItem("userToken") ?? null); 
    const [isSucces, setItSucces] = useState(false);
    const [errorState, setError] = useState(null)
    const [detailOk, setDetailok] = useState(false)
    const [detailButton, setDetailButton] = useState(false)

    console.log("carrito:", cart);
    

    useEffect(() => {
        const cartFromLocalStorage = localStorage.getItem("newCart");
        if (cartFromLocalStorage) {
            setCart(JSON.parse(cartFromLocalStorage));
        }
    }, []);


    const despacharCompra = () => { 
        setDetailButton(true)
        setTimeout(() => {
            despacharCompraReq(cart, setCart, setItSucces, setError, setDetailok);
            setDetailButton(false)
        }, 1500)
    };

    const handlerRemove = (productId : number) => {
        const filter = cart.filter(product => product.id !== productId)
        localStorage.setItem("newCart", JSON.stringify(filter))
        setCart(filter)
    }

    useEffect(() => {
        const totalPrice = cart.reduce((sum: number, product: IProduct) => {
            const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
            return sum + price;
        }, 0);
        setCartPrice(totalPrice);
    }, [cart]);
   
    /*i el token del usuario se borra por el log out, el carrito se vacia y redirige a home.
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            localStorage.removeItem("newCart");
            router.push("/")
        } 
    }, []);*/
    
    return (
        
        <div className="bg-customGray pt-20 min-h-screen">
            <div className="container  px-7 py-8 flex flex-col md:flex-row">
                {/* Tarjeta del carrito */}
                <div className="bg-white shadow-lg mr-20 rounded-lg w-full sm:w-full md:w-full">
                    <h1 className="text-2xl font-semibold  mb-4">Carrito de Compras</h1>
                    <hr></hr>
                    <div className="flex sm:text-sm md:text-lg flex-col">
                        {cart.map((product) => (
                            <>
                                <div key={product.id} className="bg-white flex flex-row justify-between items-start rounded-lg p-4">
                                    <img src={product.image} alt={product.name} className="mb-4 w-12 h-12" />
                                    <h2 className="text-lg justify-start font-semibold px-2">{product.name}</h2>
                                    <span className="text-gray-600 px-2">Cantidad: 1</span>
                                    <p className="text-mlgray">${product.price}</p>
                                    <span onClick={() => handlerRemove(product.id)} className="flex cursor-pointer font-normal text-blueMl flex-col">eliminar</span>
                                </div>
                                <hr></hr>
                            </>
                        ))}
                    </div>
                </div>
                 {/* Tarjeta de resumen de compra */}
                <div className="bg-white shadow-lg p-1 h-44 rounded-lg md:mr-4 md:w-1/3">
                    <h1 className="text-xl font-semibold mb-2">Resumen de Compra</h1>
                    <hr></hr>
                    <br></br>
                    <h3 className="text-gray-600 mb-2">Cantidad de productos: {cart.length}</h3>
                    <div className="flex flex-wrap justify-start items-center">                   
                        <h3 className="text-gray-600 mb-2 mr-2">Total:</h3>
                        <p className="text-blueMl mb-2">${cartPrice}</p>
                    </div>
                    {isSucces && <Component/>} 
                    {errorState && <Component2 error={errorState} />}
                    {detailOk ? ( 
                        <Link href="userdashboard/userdetailbuy" className="bg-green-500 text-white px-4 py-2 mb-0 rounded hover:bg-green-500">Detalle de Compra</Link>
                        ):
                        (<button onClick={despacharCompra}  className="bg-blue-500 text-white px-4 py-2 mb-0 rounded hover:bg-blue-600">{detailButton ? 'procesando..' : 'Comprar'}</button>)    
                    }
                </div>
            </div>
        </div>
    );
};

export default Carrito;