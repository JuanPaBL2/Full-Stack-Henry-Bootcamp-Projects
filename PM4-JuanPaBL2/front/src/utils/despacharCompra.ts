import axios from "axios";

export const despacharCompraReq = async (cart: any, token: any, setCart: any, setItSucces: any, setError: any, setDetailok: any) => {
    try {
        const products = cart.map(product => product.id) 
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
    }
}