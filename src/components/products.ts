import type { Product } from '@/components/types/types'


const titles = ["vann", "brød", "salami", "toast", "brus"]
const prices = [500, 200, 300, 100, 50, 29, 99]
const categories = ["Food", "Drinks", "wholefoods"]

export const productFactory = (numberOfProducts: number): Product[] => {
    return Array<Product | null>(numberOfProducts)
        .fill(null)
        .map(() => ({
            title: getRandomTitle(),
            price: getRandomPrice(),
            category: getRandomCategory()
        }))
}

const getRandomTitle = (): string => {
    return titles[Math.floor(Math.random() * titles.length)]
}

const getRandomPrice = (): number => {
    return prices[Math.floor(Math.random() * prices.length)]
}

const getRandomCategory = (): string => {
    return categories[Math.floor(Math.random() * categories.length)]
}