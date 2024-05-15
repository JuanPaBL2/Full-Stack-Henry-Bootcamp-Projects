
'use client'
import React from "react";
//componentes
import { Cardi } from "@/componentes/card/card";
//interfaces
import { IProduct } from "@/interfaces/interfazProducts";
//react
import { useEffect, useState } from "react";
//utils
import { fetchProducts } from "@/utils/products";

export const Card: React.FC = (): React.ReactNode => {
  
  const [products, setProducts] = useState<IProduct[]>([]);
  //ESTADO DEL CARRITO
  const [cart, setCart] = useState<IProduct[]>([])

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);
  
  useEffect(() => {
    const storedCart = localStorage.getItem("newCart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

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
          {/*Mapea el arreglo de productos y renderiza un Card para cada uno*/}
          {products.map((product) => (
              <Cardi key={product.id} product={product} addToCart={addToCart} detailProduct={detailProduct}/>
          ))}
      </>
  );
};

export default Card;