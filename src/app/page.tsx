"use client"
import { productFactory } from '@/components/products';
import type { Product } from '@/components/types/types';
import React, { useState, useEffect } from "react";
import type { CartItem } from '@/components/types/types';
import Cart from '@/components/Cart';
import ProductList from '@/components/ProductList';


export default function Home() {
  
  
 
  const [products, setProducts] = useState<Product[]>([]);
 

  
  
  
  useEffect(() => {
    const generatedProducts = productFactory(12); 
    setProducts(generatedProducts);
  }, []);


  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, { product, quantity: 1 }]);
  };
  

  const isInCart = (product: Product) => {
      return cart.some((item) => item.product.title === product.title);
  };

  const incrementQuantity = (cartIndex: number) => {
      cart[cartIndex].quantity++;
      setCart([...cart]);
  };

  const decrementQuantity = (cartIndex: number) => {
    cart[cartIndex].quantity--;
    if (cart[cartIndex].quantity === 0) {
      
      cart.splice(cartIndex, 1);
    }
    setCart([...cart]);
  }

  const calculateTotalPrice = (): number => {
      let totalPrice = 0;
      cart.forEach((item) => {
          totalPrice += item.product.price * item.quantity;
      });
      return totalPrice;
  }


  

  

  return (
    <>
     <ProductList products={products} addToCart={addToCart} isInCart={isInCart} />
     <Cart 
      cart={cart}
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
      calculateTotalPrice={calculateTotalPrice}
      />
    </>
  )
};

