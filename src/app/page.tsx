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
    fetch('/apii/responses')
      .then((response) => response.json())
  }, []);

  
  
  
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

  const [purchasedProducts, setPurchasedProducts] = useState<CartItem[]>([]);

  const handlePurchase = () => {
    // lager en kopi av cart
    const updatedCart = [...cart];
  
    // flytter over items fra cart til purscahesProducts
    const purchasedItems = [...purchasedProducts];
    updatedCart.forEach((cartItem) => {
      const existingItemIndex = purchasedItems.findIndex(
        (purchasedItem) => purchasedItem.product.title === cartItem.product.title
      );
  
      if (existingItemIndex !== -1) {
        // hvis product allerede eksisterer i purchaesdProducts oppdater heller quantity
        purchasedItems[existingItemIndex].quantity += cartItem.quantity;
      } else {
        // ellers skal den bare legge produktet i pruchaseditems
        purchasedItems.push({ ...cartItem });
      }
    });
  
    //gjenbruker allerede eksisterende funksjon men gir den ett nytt navn så jeg kan kalle på den.
    const totalCost = calculateTotalPrice();
  
    // her setter jeg purchased products og tømmer cart for items så det blir en tom array. dette resetere også hele programmet som gjør at du får
    //nye 12 produkter du kan velge mellom. 
    setPurchasedProducts(purchasedItems);
    setCart([]);
  
  
      //disse to consol.logene er her kun fordi jeg vil vise at det fungerer. ville jeg gjort det bedre hadde jeg laget en komponent for 
      //purscahesitems som hviser hva bruker har kjøpt, antall per produkt og hvor mye det har kostet.
      console.log(purchasedItems),
      console.log(totalCost)
    
  };
  

  

 

  

  

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
      
    </>
  )
};

