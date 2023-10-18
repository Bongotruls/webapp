"use client"
import { productFactory } from '@/components/products';
import type { CartItem, Product } from '@/components/types/types';
import React, { useState, useEffect } from "react";
import Cart from '@/components/Cart';
import ProductList from '@/components/ProductList';
import { useCart } from '@/components/useCart';
import Link from 'next/link';






export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
 
    


  useEffect(() => {
    const generatedProducts = productFactory(12); 
    setProducts(generatedProducts);
  }, []);

  

 

 



  const {
    cart,
    addToCart,
    isInCart,
    incrementQuantity,
    decrementQuantity,
    calculateTotalPrice,
    handlePurchase,
  } = useCart();

  

  return (
    <>
     <ProductList products={products} addToCart={addToCart} isInCart={isInCart} />
     <Cart 
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        calculateTotalPrice={calculateTotalPrice}
        handlePurchase={handlePurchase} setCart={function (newCart: CartItem[]): void {
          throw new Error('Function not implemented.');
        } }      />
    
    <div>
    <Link href="http://localhost:3000/apii/pages">Go to API Page</Link>
    </div>
 


    </>
  )
};

