import { productFactory } from '@/components/products'
import type { Product } from '@/components/types/types'

export default function Home() {
  const arr: Product[] = productFactory(10)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {arr.map((product, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold mb-2">{product.title}</h1>
          <h2 className="text-lg font-medium text-gray-700">{product.price} kr</h2>
          <h3 className="text-sm text-gray-500">{product.category}</h3>
        </div>
      ))}
    </div>
  )
};