"use client"
import { productFactory } from '@/components/products';
import type { Product } from '@/components/types/types';
import React, { useState, useEffect } from "react";






export default function apiHome() {
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
 

  
  const [stringData, setStringData] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  
  
  const sendStringToAPI = () => {
    fetch('/apii/posting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: stringData }),
    })
      .then((response) => {
        if (response.status === 200) {
          setResponseMessage('String data added to the API');
        } else {
          setResponseMessage('Failed to send string data to the API');
        }
      })
      .catch((error) => {
        console.error('Error sending string data to the API:', error);
      });
  };
  
 
  



  

  

  return (
    <>
      <div className="flex items-center space-x-2">
  <input
    className="border border-gray-400 rounded px-2 py-1"
    type="text"
    value={stringData}
    onChange={(e) => setStringData(e.target.value)}
    placeholder="Enter a string"
  />
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
    onClick={sendStringToAPI}
  >
    Send String to API
  </button>
</div>
<p className="text-green-600 mt-2">{responseMessage}</p>
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

