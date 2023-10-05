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

 
  act(() => {
    result.current.decrementQuantity(0); 
  });

 
  expect(result.current.cart[0].quantity).toBe(2); 
});