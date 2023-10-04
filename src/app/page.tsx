"use client"
import { productFactory } from '@/components/products';
import type { Product } from '@/components/types/types';
import React, { useState, useEffect } from "react";
import type { CartItem } from '@/components/types/types';


export default function Home() {
  
  
 
  const [products, setProducts] = useState<Product[]>([]);
 

  
  
  
  useEffect(() => {
    
    const generatedProducts = productFactory(12); 
    setProducts(generatedProducts);
  }, []);


  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
      setCart([...cart, { product, quantity: 1 }]);
      setProducts(products.filter((p) => p !== product));
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
     
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold mb-2">{product.title}</h1>
          <h2 className="text-lg font-medium text-gray-700">{product.price} kr</h2>
          <h3 className="text-sm text-gray-500">{product.category}</h3>
          {isInCart(product) ? (
        <>
          <p>Product is in cart</p>
          <button
            onClick={() => incrementQuantity(cart.findIndex((item) => item.product.title === product.title))}
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1"
          >
            +
          </button>
          <button
            onClick={() => decrementQuantity(cart.findIndex((item) => item.product.title === product.title))}
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1"
          >
            -
          </button>
        </>
      ) : (
        <button
          onClick={() => addToCart(product)}
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
         
        >
          ADD
        </button>
      )}
          
        </div>
        
      ))}
  
     
    </div>
    <div>
    <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.product.title} - Quantity: {item.quantity}
              <button onClick={() => decrementQuantity(index)} type="button" 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-3"
              style={{ width: '50px', height: '50px' }}>-</button>
              <button onClick={() => incrementQuantity(index)} type="button"  
              className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-3"
              style={{ width: '50px', height: '50px' }}>+</button>
            </li>
          ))}
        </ul>
        <p>Total Price: {calculateTotalPrice()} KR</p>
    </div>
    

    
    </>
  )
};

