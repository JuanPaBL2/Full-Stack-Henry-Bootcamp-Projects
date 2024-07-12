'use client'
import React from "react";
import { Cardi } from "@/componentes/card/card";
//interfaces
import { IProduct, ProductFiltered } from "@/interfaces/interfazProducts";
//react
import { useEffect, useState } from "react";
//utils
import { fetchProducts } from "@/utils/products";




const ProductFilter: React.FC = (): React.ReactNode => {

    const [products, setProducts] = useState<IProduct[]>([]);
    //FILTERED
    const [productFiltered, setProductFiltered] = useState<ProductFiltered>({ item: '' });

    const [cart, setCart] = useState<IProduct[]>([])
 
    useEffect(() => {
      fetchProducts(setProducts);
    }, []);

   
    useEffect(() => {
        const data: any = localStorage.getItem("itemCategory")
        const parse = JSON.parse(data)
        setProductFiltered(parse)
    },[])
    
    const addToCart = (product: IProduct) => {
        const newCart = [...cart, product];
        setCart(newCart);
        localStorage.setItem("newCart", JSON.stringify(newCart))
    };

    const detailProduct = (product: IProduct) => {
        localStorage.setItem("detailProduct", JSON.stringify(product))
    };
    
    
    return (
        <>
        {/*Mapear el arreglo de productos y renderizar un Cardi solo si el nombre coincide con productFiltered*/}
        {products.map((product) => (
            product.name.toLowerCase().includes(productFiltered.item.toLowerCase()) && 
                <Cardi key={product.id} product={product} addToCart={addToCart} detailProduct={detailProduct}/>
        ))}
    </>
    );
}

export default ProductFilter;