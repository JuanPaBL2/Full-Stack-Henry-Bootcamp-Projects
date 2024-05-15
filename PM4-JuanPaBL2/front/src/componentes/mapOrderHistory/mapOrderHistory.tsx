
import React from "react";
import { useState, useEffect } from "react";
import { historyBuy } from "@/utils/historybuyd";
import { OrderHistoryChild } from "../orderHistory/orderHistoryChild";

export const OrderHistory: React.FC = (): React.ReactNode => {
    
    const [token] = useState(localStorage.getItem("userToken") || null)
    const [orderHistory, setOrderHistory] = useState([])

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