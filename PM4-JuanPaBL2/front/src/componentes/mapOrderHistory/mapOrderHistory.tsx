
import React from "react";
import { useState, useEffect } from "react";
import { historyBuy } from "@/utils/historybuyd";
import { OrderHistoryChild } from "../orderHistory/orderHistoryChild";
import { IOrder } from "@/interfaces/interfazProducts";

const OrderHistory: React.FC = (): React.ReactNode => {
    
    const [token, setToken] = useState<string | null>(null);
    const [orderHistory, setOrderHistory] = useState<IOrder[]>([])

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userToken = localStorage.getItem("userToken");
            if (userToken) {
                setToken(userToken);
            }
        }
    }, []);

    useEffect(() => {
        if (token) {
            historyBuy(token, setOrderHistory)
        } 
    },[token])

    
    return (
        <>
            {orderHistory.map((order) => (
                <OrderHistoryChild key={order.id} order={order} />
            ))}
        </>
    )
}

export default OrderHistory;