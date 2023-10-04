import type { Product } from '@/components/types/types'


const titles = ["vann", "brød", "salami", "toast", "brus"]
const prices = [500, 200, 300, 100, 50, 29, 99]
const categories = ["Food", "Drinks", "wholefoods"]

//lager 3 lister over titles, prices og categories

export const productFactory = (numberOfProducts: number): Product[] => {
    //her lager jeg en funksjon som tar ett argument som er numberOfProducts som vil representere hvor mange produkter vi ønsker å lage.
    return Array<Product | null>(numberOfProducts)
    //når funksjonene kjører skal den lage en array av products.
        .fill(null)
        //.fill(null) gjør at arrayen alltid starter med en tom array slik at antall produkter i arrayen er alltid riktig i forhold til hva vi ønsker.
        .map(() => ({
            title: getRandomTitle(),
            price: getRandomPrice(),
            category: getRandomCategory()
            

           
            // .map gjør at vi gjør om alle elementer i listen til et objekt av product.
        }))
}

//de 3 under gjør at jeg kan kalle på getRandomTitle,Price og Category for å få en tilfeldig verdi av alle 3 hver gang den kjører i .map
const getRandomTitle = (): string => {
    return titles[Math.floor(Math.random() * titles.length)]
}

const getRandomPrice = (): number => {
    return prices[Math.floor(Math.random() * prices.length)]
}

const getRandomCategory = (): string => {
    return categories[Math.floor(Math.random() * categories.length)]
}
