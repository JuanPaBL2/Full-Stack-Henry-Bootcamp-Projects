import { IProduct } from "@/interfaces/interfazProducts";
import axios from "axios";

function obtenerToken(): string {
    // Aquí implementa la lógica para obtener el token desde localStorage, sesión, cookies, etc.
    // Por ejemplo:
    const token = localStorage.getItem("userToken");
    if (!token) {
        throw new Error("Token no encontrado");
    }
    return token;
}

export const despacharCompraReq = async (cart: IProduct[], setCart: any, setItSucces: any, setError: any, setDetailok: any) => {
    try {
        const products = cart.map(product => product.id) 
        const token = obtenerToken()
        const response = await axios.post('http://localhost:3002/orders', {products}, {
            headers: {
                Authorization: token,
            }
        });
        setCart([]);
        localStorage.removeItem("newCart");
        setItSucces(true)    
        localStorage.setItem("userOrder", JSON.stringify(response.data))
        setDetailok(true)        
    } catch (error: any) {
        setItSucces(false)
        setError(error)
        console.log("error al efectuar compra", error);
        
    }
}