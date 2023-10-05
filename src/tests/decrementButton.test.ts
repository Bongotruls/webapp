import { renderHook, act } from '@testing-library/react';
import { useCart } from '@/components/useCart'; 




test('should decrement quantity in cart when Decrement button is pressed', () => {
    const initialCart = [
        {
          product: {
            title: 'Vann',
            price: 10,
            category: 'tur',
          },
          quantity: 3, 
        },
    ];

    const { result } = renderHook(() => useCart());
  
    act(() => {
        result.current.setCart(initialCart);
    });

    // Log the initial state of the cart
    console.log("Initial Cart:", result.current.cart);

    act(() => {
        result.current.decrementQuantity(0); 
    });

    // Log the updated state of the cart after decrementing
    console.log("Updated Cart:", result.current.cart);

    expect(result.current.cart[0].quantity).toBe(2); 
});



