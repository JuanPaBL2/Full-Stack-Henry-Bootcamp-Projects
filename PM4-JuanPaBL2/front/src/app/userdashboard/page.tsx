'use client'
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Dashboard: React.FC = (): React.ReactNode => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null) 
    const [userData, setUserData] = useState<any>(null); //Estado para almacenar los datos del usuario

    useEffect(() => {
        setToken(localStorage.getItem("userToken"))
    })

    useEffect(() => {
        const userDataFromLocalStorage = localStorage.getItem("userData");
        if (userDataFromLocalStorage) {
            setUserData(JSON.parse(userDataFromLocalStorage)); //Recuperar datos del usuario desde localStorage
        }
    }, []);

    //si no existe la userData en el localstorage, redirigir a home.
    useEffect(() => {
        const userDataFromLocalStorage = localStorage.getItem("userData");
        if (!userDataFromLocalStorage) {
            router.push("/");
        }
    }, [] );

    //por tema de estilos definidos en el h3, decidi usar useRouter en vez de link en la etiqueta personal info.
    const toPersonalInfo = () => {
        router.push("/userdashboard/personalinfo")
    }


    return (
        <>
            {userData && userData.user && (

                <div className="flex h-screen font-encode-sans-expanded">
                    {/* Barra lateral */}
                    <aside className="bg-gray-800 w-64 ancho-dashboard flex-shrink-0">
                        <div className="h-full flex flex-col justify-between pt-4">
                            {/* Logo o título */}
                            <div className="py-4 px-6">
                                <h1 className="text-white text-2xl my-custom-class font-bold">Dashboard</h1>
                            </div>
                            {/* Navegación */}
                            <nav className="flex-1 my-custom-class ">
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="block py-2 px-6 text-white hover:bg-gray-700  transition duration-300">Perfil</a>
                                    </li>
                                    <Link href="/userdashboard/userdetailbuy" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Detalle de compra</Link>  
                                    <Link href="/userdashboard/userhistorybuy" className="block py-2 px-6 text-white hover:bg-gray-700 transition duration-300">Historial de compras</Link>  
                                </ul>
                            </nav>
                        </div>
                    </aside>
                    {/* Contenido principal */}
                    <main className="flex-1 bg-customGray my-custom-class  text-center">
                        <div className="p-6 ">
                            {/* Contenido del dashboard */}
                            <h2 className="text-2xl titulo-dashboard font-semibold">Bienvenido <span className="text-bruViolet">{userData.user.name}!</span></h2>
                            <p className="text-gray-600">contenido de tu dashboard.</p>
                        </div>
                        {/* Tarjetas */}
                        <div className="flex flex-col space-y-6 px-6">
                            {/* Tarjeta 1 */}
                            <div onClick={toPersonalInfo} className="bg-white shadow-md padding-card rounded-lg p-6 flex items-center space-x-4 cursor-pointer">
                                <img src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png" alt="Avatar" className="w-16 h-16 rounded-full" />
                                <div className="text-left">
                                    <h3 className="text-lg titulos-card font-bold">Informacion personal</h3>
                                    <span className="text-gray-500 text-card">Correo electrónico, Credenciales, Etc.</span>
                                </div>
                            </div>
                            {/* Tarjeta 2 */}
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://cdn-icons-png.flaticon.com/512/102/102649.png" alt="Icono 1" className="w-12 h-12 rounded-full" />
                                        <div className="text-left">
                                            <h3 className="text-lg titulos-card font-semibold">Seguridad</h3>
                                            <span className="text-gray-500 text-card">Configuraciones de la seguridad de tu cuenta.</span>
                                        </div>
                                    </div>
                                    {/* Agregar más filas según sea necesario */}
                                </div>
                            </div>
                            {/* Tarjeta 2 */}
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://cdn.icon-icons.com/icons2/1259/PNG/512/1495815246-jd01_84592.png" alt="Icono 1" className="w-12 h-12 rounded-full" />
                                        <div className="text-left">
                                            <h3 className="text-lg titulos-card font-semibold">Tarjetas</h3>
                                            <span className="text-gray-500 text-card">Tarjetas guardadas en tu cuenta.</span>
                                        </div>
                                    </div>
                                    {/* Agregar más filas según sea necesario */}
                                </div>
                            </div>
                            {/* Tarjeta 2 */}
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://cdn-icons-png.flaticon.com/512/4226/4226982.png" alt="Icono 1" className="w-12 h-12 rounded-full" />
                                        <div className="text-left">
                                            <h3 className="text-lg titulos-card font-semibold">Direcciones</h3>
                                            <span className="text-gray-500 text-card">Direcciones guardadas en tu cuenta.</span>
                                        </div>
                                    </div>
                                    {/* Agregar más filas según sea necesario */}
                                </div>
                            </div>

                        </div>
                    </main>
                </div>

            )}
        </>
    )
}

export default Dashboard;