import { Product, CartItem } from "./types/types";
import React, { useState } from "react";

export function useCart() {
    const [cart, setCart] = useState<CartItem[]>([]);
  
    const addToCart = (product: Product) => {
      setCart([...cart, { product, quantity: 1 }]);
    };
  
    const isInCart = (product: Product) => {
      return cart.some((item) => item.product.title === product.title);
    };
  
    const incrementQuantity = (cartIndex: number) => {
      const updatedCart = [...cart];
      updatedCart[cartIndex].quantity++;
      setCart(updatedCart);
    };
  
    const decrementQuantity = (cartIndex: number) => {
      const updatedCart = [...cart];
      updatedCart[cartIndex].quantity--;
      if (updatedCart[cartIndex].quantity === 0) {
        updatedCart.splice(cartIndex, 1);
      }
      setCart(updatedCart);
    };
  
    const calculateTotalPrice = (): number => {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
      });
      return totalPrice;
    };

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
    
    let totalprice = calculateTotalPrice();
    // her setter jeg purchased products og tømmer cart for items så det blir en tom array. dette resetere også hele programmet som gjør at du får
    //nye 12 produkter du kan velge mellom. 
    setPurchasedProducts(purchasedItems);
    setCart([]);

    //console logg for å se array 
    console.log(purchasedItems)
    console.log(totalprice)
    
     
     
    
  };
  
  
    return {
      cart,
      addToCart,
      isInCart,
      incrementQuantity,
      decrementQuantity,
      calculateTotalPrice,
      handlePurchase,
    };
  }