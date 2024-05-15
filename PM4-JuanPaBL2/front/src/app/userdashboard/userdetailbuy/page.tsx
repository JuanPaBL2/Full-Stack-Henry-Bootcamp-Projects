'use client'
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fecha } from "@/utils/dateFunction";

import Link from "next/link";

const UserDetailBuy: React.FC = (): React.ReactNode => {
    const router = useRouter();

    const userOrderHistory = JSON.parse(localStorage.getItem("userOrder") || "{}");
    const [token] = useState(localStorage.getItem("userToken") ?? null);

    useEffect(() => {
        if (!token || !userOrderHistory) {
            router.push("/");
        }
    }, );

    console.log(userOrderHistory);

    return (
        <>
            {userOrderHistory && (
                <div className="flex h-screen font-encode-sans-expanded">
                    {/* Barra lateral */}
                    <aside className="bg-gray-800 w-64 flex-shrink-0">
                        <div className="h-full flex flex-col justify-between pt-4">
                            {/* Logo o título */}
                            <div className="py-4 px-6">
                                <h1 className="text-white text-2xl font-bold">Dashboard</h1>
                            </div>
                            {/* Navegación */}
                            <nav className="flex-1">
                                <ul className="space-y-2">
                                    
                                        <Link href="/userdashboard" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Perfil</Link>
                                        <Link href="/userdashboard/userdetailbuy" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Detalle de compra</Link>  
                                        <Link href="/userdashboard/userhistorybuy" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Historial de compras</Link>  
                                    
                                </ul>
                            </nav>
                        </div>
                    </aside>
                     {/* Contenido principal */}
                    <main className="flex-1 bg-customGray text-center">
                        <div className="p-6">
                            {/* Contenido del dashboard */}
                            <h2 className="text-2xl  text-gray-600">Detalle de ultima compra</h2>
                            <p className="text-gray-600"></p>
                        </div>
                        {/* Tarjetas de historial de compras */}

                        <div key={userOrderHistory.id} className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden mb-4">
                            <div className="p-4">
                                <p className="text-gray-600">Fecha de compra:</p><p>{fecha(userOrderHistory.date)}</p>
                                <p className="text-gray-600">Estado: <span className="text-green-500">{userOrderHistory.status}</span></p>
                                <p className="text-gray-600">Productos:</p>
                                <ul className="list-disc ml-6">
                                    {userOrderHistory.products && userOrderHistory.products.map((product: any) => (
                                        <li key={product.id}>{product.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>       

                    </main>
                </div> 
            )}
        </>
    )
}

export default UserDetailBuy;

/*Objeto que contiene el hook userOrderHistory
    date: "2024-05-08T03:03:44.809Z"
    id: 6
    products: Array(1)
    0: {id: 2, name: 'MacBook Air', description: 'Embrace efficiency and sophistication with the Mac…e your computing experience with the MacBook Air.', price: 999, stock: 10, …}
    length: 1
    [[Prototype]]: Array(0)
    status: "approved" */

