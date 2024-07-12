'use client'
import React, {useEffect, useState} from "react";
import { fecha } from "@/utils/dateFunction";
import { IOrder } from "@/interfaces/interfazProducts";

interface OrderHistoryChildProps {
    order: IOrder;
}


export const OrderHistoryChild: React.FC<OrderHistoryChildProps> = ({ order }) => {

    const [orderPrice, setOrderPrice] = useState<number | null>(null);

    useEffect(() => {
        if (order){
            const totalPrice = order.products.reduce((sum: number, product: any) => {
                return sum + product.price;
            }, 0);
            setOrderPrice(totalPrice)
        } 
       }, [])

    return (
      <>
        <p className="text-black font-semibold flex justify-start">Fecha: <span className="text-gray-500 font-normal"> {fecha(order.date)} </span></p>
        <div className="border border-gray-300 bg-white overflow-y-auto rounded-md p-4 flex items-center">
            {/* Contenido de cada producto */}
            {order.products.map((product: any) => (
                <div key={product.id} className="flex items-center mb-4">
                    {/* Imagen a la izquierda */}
                    <img src={product.image} alt="Product Image" className="w-12 h-12 border border-gray-300 rounded-md mr-4"/>
                    {/* Nombre del producto */}
                    <div>
                        <p className="text-black font-semibold">{product.name}</p>
                        <p className="text-black font-semibold">Status: <span className="text-green-500">{order.status}</span></p>
                    </div>
                </div>
            ))}
        </div>
        <p className="text-black font-semibold flex justify-end">Precio total: <span className="text-gray-500 ml-2 font-normal">${orderPrice}</span></p>
        <br></br>
      </>
  );
};
