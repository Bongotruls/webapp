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
    
    <div className="mt-4">
  <Link href="/apiPage" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Go to API Page
  </Link>
</div>
 


    </>
  )
};

