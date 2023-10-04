import React from 'react';
import type { CartItem } from '@/components/types/types';

interface CartProps {
    cart: CartItem[],
    incrementQuantity: (cartIndex: number) => void,
    decrementQuantity: (cartIndex: number) => void,
    calculateTotalPrice: () => number,
    handlePurchase: () => void
};

const Cart: React.FC<CartProps>= ({cart, incrementQuantity,decrementQuantity, calculateTotalPrice, handlePurchase }) => {
    return (
        <>
        <div>
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.product.title} - Quantity: {item.quantity}
                <button
                  onClick={() => decrementQuantity(index)}
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-3"
                  style={{ width: '50px', height: '50px' }}
                >
                  -
                </button>
                <button
                  onClick={() => incrementQuantity(index)}
                  type="button"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-3"
                  style={{ width: '50px', height: '50px' }}
                >
                  +
                </button>
              </li>
            ))}
          </ul>
          <p>Total Price: {calculateTotalPrice()} KR</p>
          <section>
           <button onClick={handlePurchase} type="button"className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-3"
                  style={{ width: '100px', height: '50px' }}
                >
                Kjøp!
                </button>
          </section>
        </div>
        </>
      );
    };
    
    export default Cart;