'use client'
import React from "react";
import Link from "next/link";
import { useState, useEffect} from "react";
import OrderHistory from "@/componentes/mapOrderHistory/mapOrderHistory";

const UserHistoryBuy: React.FC = () => {
    
    const [token, setToken] = useState<string|null>(null)

    useEffect(() => {
        if (typeof window !== "undefined") {
          const tokenStorage = localStorage.getItem("userToken");
          if (tokenStorage) {
            setToken(tokenStorage);
          }
        }
      }, []);
  
    return (
        <>
                <div className="flex h-screen font-encode-sans-expanded">
                    {/* Barra lateral */}
                    <aside className="bg-gray-800 w-64 ancho-dashboard *:flex-shrink-0">
                        <div className="h-full flex flex-col  justify-between pt-4">
                            {/* Logo o título */}
                            <div className="py-4 px-6">
                                <h1 className="text-white my-custom-class text-2xl font-bold">Dashboard</h1>
                            </div>
                            {/* Navegación */}
                            {token && (
                                <nav className="flex-1 my-custom-class">
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/userdashboard" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Perfil</Link>
                                        </li> 
                                        <li>
                                            <Link href="/userdashboard/userdetailbuy" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Detalle de compra</Link>  
                                        </li>
                                        <li>
                                            <Link href="/userdashboard/userhistorybuy" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Historial de compras</Link> 
                                        </li>
                                    </ul>
                                </nav>
                            )}
                        </div>
                    </aside>
                    {/* Contenido principal */}
                    <main className="flex-1 bg-customGray my-custom-class text-center overflow-y-auto">
                        <div className="p-6">
                            {/* Contenido del dashboard */}
                            <h2 className="text-2xl text-gray-600 titulo-dashboard  font-semibold">Tu historial de compras</h2>
                        </div>
                        {/*HISTORIAL DE COMPRAS */}
                        <OrderHistory/>
                    </main>
                </div>
        </>
    )
}

export default UserHistoryBuy;