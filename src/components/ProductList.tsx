import React from 'react';
import type { Product } from './types/types';
import ProductCard from './ProductCard';

interface ProductListProps{
    products: Product[];
    addToCart: (product: Product) => void,
    isInCart: (product: Product ) => boolean
};

const ProductList: React.FC<ProductListProps> = ({products, addToCart, isInCart}) => {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} addToCart={addToCart} isInCart={isInCart} />
      ))}
    </div>
  );
};

export default ProductList;