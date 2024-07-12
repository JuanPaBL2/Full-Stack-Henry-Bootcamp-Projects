'use client'
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UserData {
    user: {
        name: string;
        email: string;
        phone: string;
    };
}
const PersonalInfo: React.FC = (): React.ReactNode => {
    const router = useRouter()

    // Obtener los datos del usuario del local storage
    const [userData, setUserData] = useState<UserData| null>(null)
    
    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            const userDataParsed: UserData = JSON.parse(storedUserData);
            setUserData(userDataParsed);
        }
    }, []);

    return (
        <>
            {userData && userData.user && (

                <div className="flex h-screen font-encode-sans-expanded">
                    {/* Barra lateral */}
                    <aside className="bg-gray-800 w-64 flex-shrink-0">
                        <div className="h-full flex flex-col justify-between pt-4">
                            {/* Logo o título */}
                            <div className="py-4 px-6">
                                <h1 className="text-white text-2xl sm:text-xs my-custom-class font-bold">Dashboard</h1>
                            </div>
                            {/* Navegación */}
                            <nav className="flex-1">
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/userdashboard" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Perfil</Link>
                                    </li>
                                    <Link href="/userdashboard/userhistorybuy" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Historial de compras</Link>  
                                </ul>
                            </nav>
                        </div>
                    </aside>
                    {/* Contenido principal */}
                    <main className="flex-1 bg-customGray text-center">
                        <div className="p-6">
                            {/* Contenido del dashboard */}
                            <h2 className="text-2xl font-semibold">!Bienvenido <span className="text-bruViolet">{userData.user.name}!</span></h2>
                            <p className="text-gray-600">contenido de tu dashboard.</p>
                        </div>
                        
                        {/* Tarjetas */}
                        <div className="flex mb-32 py-64 justify-center items-center font-encode-sans-expanded pt-10">
                            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
                                <h1 className="text-2xl font-semibold titulos-card mb-4">Información Personal</h1>
                                {/* Tarjeta de datos del usuario */}
                                <div className="grid grid-cols-1 gap-4">
                                    {/* Nombre */}
                                    <div className="flex items-center space-x-4">
                                        <span className="font-semibold">Nombre:</span>
                                        <span>{userData.user && userData.user.name}</span>
                                    </div>
                                    {/* Correo electrónico */}
                                    <div className="flex items-center space-x-4">
                                        <span className="font-semibold">Correo electrónico:</span>
                                        <span>{userData.user && userData.user.email}</span>
                                    </div>
                                    {/* Teléfono */}
                                    <div className="flex items-center space-x-4">
                                        <span className="font-semibold">Teléfono:</span>
                                        <span>{userData.user && userData.user.phone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </main>
                </div>

            )}
        </>
    )
}

export default PersonalInfo;