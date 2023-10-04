import React from "react";
import type { Product } from '@/components/types/types';

interface ProductCardProps {
    product: Product,
    addToCart: (product: Product) => void,
    isInCart: (product: Product) => boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart, isInCart }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold mb-2">{product.title}</h1>
        <h2 className="text-lg font-medium text-gray-700">{product.price} kr</h2>
        <h3 className="text-sm text-gray-500">{product.category}</h3>
        {isInCart(product) ? (
          <>
            <p>Product is in cart</p>
            <button
              onClick={() => addToCart(product)}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
              disabled
            >
              ADD
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
    );
  };
  
  export default ProductCard;