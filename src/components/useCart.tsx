import { Product, CartItem } from "./types/types";
import React, { useState } from "react";

export function useCart() {
    const [cart, setCart] = useState<CartItem[]>([]);
  
    //logikk for å legge til objekt i handlekurv
    const addToCart = (product: Product) => {
      setCart([...cart, { product, quantity: 1 }]);
    };
  
    //logik for om objekt er i handlekurven
    const isInCart = (product: Product) => {
      return cart.some((item) => item.product.title === product.title);
    };
  
    //logikk for å legge til flere produkter av samme type i handlekurv
    const incrementQuantity = (cartIndex: number) => {
      const updatedCart = [...cart];
      updatedCart[cartIndex].quantity++;
      setCart(updatedCart);
    };
    
    //logikk for å ta -1 av et produkt i handlekurv av samme type
    const decrementQuantity = (cartIndex: number) => {
      const updatedCart = [...cart];
      updatedCart[cartIndex].quantity--;
      if (updatedCart[cartIndex].quantity === 0) {
        updatedCart.splice(cartIndex, 1);
      }
      setCart(updatedCart);
    };
    
    //logikk for total pris 
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
    
    //totalprice lagt til kun for console.log()
    let totalprice = calculateTotalPrice();
    // her setter jeg purchased products og tømmer cart for items så det blir en tom array. dette resetere også hele programmet som gjør at du får
    //nye 12 produkter du kan velge mellom. 
    setPurchasedProducts(purchasedItems);
    setCart([]);

    //console logg for å se at riktig objekter og total pris skrives ut i console.
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