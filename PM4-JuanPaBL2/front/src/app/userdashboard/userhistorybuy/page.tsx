'use client'
import React from "react";
import Link from "next/link";
import { useState, useEffect} from "react";
import OrderHistory from "@/componentes/mapOrderHistory/mapOrderHistory";
import { useRouter } from "next/navigation";

const UserHistoryBuy: React.FC = (): React.ReactNode => {
    
    const router = useRouter()
    const [token] = useState(localStorage.getItem("userToken") || null)

    useEffect(() => {
        if (!token) {
            router.push("/");
        }
    },[]);
  
    return (
        <>
        
                <div className="flex h-screen font-encode-sans-expanded">
                    {/* Barra lateral */}
                    <aside className="bg-gray-800 w-64 flex-shrink-0">
                        <div className="h-full flex flex-col justify-between pt-4">
                            {/* Logo o título */}
                            <div className="py-4 px-6">
                                <h1 className="text-white text-2xl font-bold">Dashboard</h1>
                            </div>
                            {/* Navegación */}
                            {token && (
                                <nav className="flex-1">
                                    <ul className="space-y-2">
                                            <Link href="/userdashboard" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Perfil</Link>
                                            <Link href="/userdashboard/userdetailbuy" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Detalle de compra</Link>  
                                            <Link href="/userdashboard/userhistorybuy" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Historial de compras</Link>  
                                    </ul>
                                </nav>
                                )}
                        </div>
                    </aside>
                    {/* Contenido principal */}
                    <main className="flex-1 bg-customGray text-center overflow-y-auto">
                        <div className="p-6">
                            {/* Contenido del dashboard */}
                            <h2 className="text-2xl text-gray-600 font-semibold">Tu historial de compras</h2>
                        </div>
                        {/*HISTORIAL DE COMPRAS */}
                        <OrderHistory/>
                    </main>
                </div>
        
        </>
    )
}

export default UserHistoryBuy;