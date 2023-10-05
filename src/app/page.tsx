"use client"
import { productFactory } from '@/components/products';
import type { Product } from '@/components/types/types';
import React, { useState, useEffect } from "react";
import type { CartItem } from '@/components/types/types';
import Cart from '@/components/Cart';
import ProductList from '@/components/ProductList';
import { useCart } from '@/components/useCart';





export default function Home() {

  
  
  
 
  const [products, setProducts] = useState<Product[]>([]);
 
  useEffect(() => {
    fetch('/apii/responses')
      .then((response) => response.json())
  }, []);

  
  
  
  useEffect(() => {
    const generatedProducts = productFactory(12); 
    setProducts(generatedProducts);
  }, []);

  
  useEffect(() => {
   const getResponses =async () => {
    const response = await fetch('/apii/responses',{
      method: 'GET'
    })
    const result =(await response.json()) as { data: Product[] }
    setProducts(result.data)
   }
    getResponses()
    
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
      handlePurchase={handlePurchase}
      />

<div className="bg-gray-200 p-4">
  <h1 className="text-2xl font-bold mb-4">Responses from API</h1>
  <ul>
    {products.map((product, index) => (
      <li key={index} className="mb-4">
        <strong className="text-blue-600">Title:</strong> {product.title}<br />
        <strong className="text-green-600">Price:</strong> {product.price}<br />
        <strong className="text-purple-600">Category:</strong> {product.category}<br />
      </li>
    ))}
  </ul>
</div>
    </>
  )
};

