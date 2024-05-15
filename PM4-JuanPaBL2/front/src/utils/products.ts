import axios from "axios";
import { IProduct } from "@/interfaces/interfazProducts";

export const fetchProducts = async (setProducts: any) => {
    try {
        const response = await axios.get<IProduct[]>("http://localhost:3002/products");
        setProducts(response.data);
        
    } catch (error) {
        console.error("Error fetching products:", error);
    }
  };