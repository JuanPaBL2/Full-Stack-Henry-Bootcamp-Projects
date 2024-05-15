import React from "react";
import { fecha } from "@/utils/dateFunction";

export const OrderHistoryChild: React.FC = ({order}: any): React.ReactNode => {

    return (
      <>
        <p className="text-black font-semibold flex justify-start">Fecha: <span className="text-gray-500 font-normal"> {fecha(order.date)} </span></p>
        <div className="border border-gray-300 overflow-y-auto rounded-md p-4 flex items-center">
            {/* Contenido de cada producto */}
            {order.products.map((product: any) => (
                <div key={product.id} className="flex items-center mb-4">
                    {/* Imagen a la izquierda */}
                    <img src={product.image} alt="Product Image" className="w-12 h-12 rounded-md mr-4"/>
                    {/* Nombre del producto */}
                    <div>
                        <p className="text-black font-semibold">{product.name}</p>
                        <p className="text-black font-semibold">Status: <span className="text-green-500">{order.status}</span></p>
                    </div>
                </div>
            ))}
        </div>
        <br/>
      </>
  );
};
