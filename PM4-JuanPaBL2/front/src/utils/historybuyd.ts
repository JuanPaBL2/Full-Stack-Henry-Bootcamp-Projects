import axios from "axios";

export const historyBuy = async (token: any, setOrderHistory:any) => {
    try {
        const headers = {
            Authorization: token
        };
        const response = await axios.get('http://localhost:3002/users/orders',{ headers } )  
        setOrderHistory(response.data)
    } catch (error) {
        console.log(error);
    }
}
