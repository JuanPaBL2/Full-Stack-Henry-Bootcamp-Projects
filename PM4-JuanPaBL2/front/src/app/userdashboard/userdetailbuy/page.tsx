'use client'
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fecha } from "@/utils/dateFunction";
import { IOrder } from "@/interfaces/interfazProducts";

import Link from "next/link";

const UserDetailBuy: React.FC = (): React.ReactNode => {
    const router = useRouter();

    const [userOrderHistory, setUserOrderHistory] = useState<any>(null);
    const [prices, setPrices] = useState(null)

    useEffect(() => {
        // Función para obtener userOrder del localStorage
        const fetchUserOrder = () => {
            const storedUserOrder = localStorage.getItem("userOrder");
            if (storedUserOrder) {
                const parsedUserOrder = JSON.parse(storedUserOrder);
                setUserOrderHistory(parsedUserOrder);
            } else {
                router.push("/");
            }
        };

        // Llamar a la función para obtener userOrder al montar el componente
        fetchUserOrder();
    }, [router]);

    

    //suma los precios de los diferentes productos de la compra.
    useEffect(() => {
        if (userOrderHistory && userOrderHistory.products && userOrderHistory.products.length > 0) {
            const totalPrice = userOrderHistory.products.reduce((sum: number, product: any) => {
                return sum + product.price;
            }, 0);
            setPrices(totalPrice);
        }
    }, [userOrderHistory]);
   
    return (
        <>
            {userOrderHistory && (
                <div className="flex h-screen font-encode-sans-expanded">
                    {/* Barra lateral */}
                    <aside className="bg-gray-800 ancho-dashboard w-64 flex-shrink-0">
                        <div className="h-full flex flex-col justify-between pt-4">
                            {/* Logo o título */}
                            <div className="py-4 px-6">
                                <h1 className="text-white  my-custom-class text-2xl font-bold">Dashboard</h1>
                            </div>
                            {/* Navegación */}
                            <nav className="flex-1  my-custom-class">
                                <ul className="space-y-2">
                                    
                                        <Link href="/userdashboard" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Perfil</Link>
                                        <Link href="/userdashboard/userdetailbuy" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Detalle de compra</Link>  
                                        <Link href="/userdashboard/userhistorybuy" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Historial de compras</Link>  
                                    
                                </ul>
                            </nav>
                        </div>
                    </aside>
                     {/* Contenido principal */}
                    <main className="flex-1 bg-customGray my-custom-class  ">
                        <div className="p-6">
                            {/* Contenido del dashboard */}
                            <h2 className="text-2xl titulo-dashboard text-center text-gray-600">Detalle de ultima compra</h2>
                            <p className="text-gray-600"></p>
                        </div>
                        {/* Tarjetas de historial de compras */}
                        <div key={userOrderHistory.id} className="max-w-md mx-auto padding-card  bg-white shadow-md rounded-md overflow-hidden mb-4">
                        <div className="p-4">
                            <div className="flex justify-between">
                                <b className="font-semibold" >Fecha de compra:</b>
                                <p className="text-end">{fecha(userOrderHistory.date)}</p>
                            </div>
                            <br></br>
                            <div className="flex justify-between">
                                <b className="font-semibold" >Estado:</b>
                                <p className="text-end text-green-500">{userOrderHistory.status}</p>
                            </div>
                            <br></br>
                            <div>
                                <b className="font-semibold" >Productos:</b>
                                <ul className="list-disc ml-6">
                                    {userOrderHistory.products && userOrderHistory.products.map((product: any) => (
                                        <li key={product.id}>{product.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <br></br>
                            <div className="flex justify-between">
                                <b className="font-semibold" >Precio total:</b>
                                <p className="text-end">${prices}</p>
                            </div>
                        </div>
                    </div>       

                    </main>
                </div> 
            )}
        </>
    )
}

export default UserDetailBuy;


