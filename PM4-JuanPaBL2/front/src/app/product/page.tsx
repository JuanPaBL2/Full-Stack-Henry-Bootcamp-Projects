'use client'
import React, { useEffect } from "react";
import {CardTitle, CardNumber, Card, Card2, ProductImage2, CardDetail  } from "@/componentes/card/stylo";
import { useState } from "react";
import { IProduct } from "@/interfaces/interfazProducts";
import { useRouter } from "next/navigation";

const ProductDetail: React.FC = (): React.ReactNode => {

    const [detailCart, setDetailCart] = useState<IProduct[]>([])
    const router = useRouter();
    
    useEffect(() => {
        const storedDetailProduct = localStorage.getItem("detailProduct");
        if (storedDetailProduct) {
            const parsedDetailProduct = JSON.parse(storedDetailProduct);
            //Si parsedDetailProduct es un objeto, lo convertimos en un array con un solo elemento
            const detailProductArray = Array.isArray(parsedDetailProduct) ? parsedDetailProduct : [parsedDetailProduct];
            setDetailCart(detailProductArray);
        }
    }, []);

    useEffect(() => {
        if (!detailCart) {
            router.push("/")
        } 
    })
    return (
        <>
            {detailCart ? (
                    <div className="py-20" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card2>
                            {detailCart.map((product, index) => (
                                <ProductImage2 key={index} src={product.image} alt="Imagen del producto" />
                            ))}
                        </Card2>
                        <CardDetail>
                            <CardTitle> Detalle del Producto<br/></CardTitle>
                            <hr/>
                            <br/>
                            <CardNumber><b>Descripcion: </b></CardNumber><br/>
                            {detailCart && detailCart.map((product, index) => (
                                <div key={index}>
                                    {product.description}
                                </div>
                            ))}<br/><br/>
                            <CardNumber><b>Stock:</b><br/></CardNumber>{detailCart && detailCart.map((product, index) => (
                                <div key={index}>
                                    {`${product.stock} unidades`}
                                </div>
                            ))}<br/><br/>

                        </CardDetail>
                    </div>
            ) : (<div className="py-20" style={{ display: 'flex', justifyContent: 'center' }}> nada por aqui.</div>)}
        </>
    );
}

export default ProductDetail;