import { productFactory } from "../components/products";

describe ('productFactory', () => {
    it('supposed to make an array of products', () =>{
        const numberOfProducts = 12;
        const products = productFactory(numberOfProducts);

        const actualtitles = ["vann", "brød", "salami", "toast", "brus"]
        const actualprices = [500, 200, 300, 100, 50, 29, 99]
        const actualcategroys =  ["Food", "Drinks", "wholefoods"]

        expect(products).toHaveLength(numberOfProducts);

        products.forEach((product) => {
        expect(products).toHaveLength(numberOfProducts)
        expect(products[0]).toHaveProperty('title')
        expect(products[0]).toHaveProperty('price')
        expect(products[0]).toHaveProperty('category')

        expect(actualtitles).toContain(product.title);
        expect(actualprices).toContain(product.price);
        expect(actualcategroys).toContain(product.category);
    })
    })
})