'use client'
import React from "react";
import { IProduct } from "@/interfaces/interfazProducts";
import { Card, CardTitle, CardNumber, ProductImage, ButtonCardi, ButtonCardiTwo} from "./stylo";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Cardi: React.FC<{product: IProduct, addToCart: (product: IProduct) => void, detailProduct: (product: IProduct) => void}> = ({ product, addToCart, detailProduct }) => {
    
    const [token] = useState(localStorage.getItem("userToken") ?? null);
    const router = useRouter();
    const [colorState, setColorState] = useState(false)

    return (
        <>
                <Card colors={colorState}>
                    <CardTitle> {product.name}</CardTitle>
                    <ProductImage src={product.image} alt="imagen" />
                    <CardNumber><b>price: </b>${product.price}</CardNumber> 
                    <Link href="/product" >
                        <ButtonCardiTwo onClick={() => detailProduct(product)}>mas detalles</ ButtonCardiTwo>
                    </Link>
                    {token && (  
                        <div>
                            <ButtonCardi colors={colorState} onClick={() => {
                                setColorState(true)
                                addToCart(product)
                                setTimeout(() => {
                                    router.push("/carritoview")
                                },1000)
                            }}>agregar al carrito</ButtonCardi>
                        </div>
                    )}
                </Card>
        </>
    );
};