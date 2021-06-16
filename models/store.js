
const allProducts = require('../db.json')
// let product1 = {
//     id: 1,
//     name: "Rice Krispies",
//     category: "food",
//     image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/RKTsquares.jpg",
//     source: "https://en.wikipedia.org/wiki/Rice_Krispies_Treats",
//     description: "Delicious corn-based rice grains melted together with marshmallows into a square-like shape.",
//     price: 0.99
// }

// let product2 = {
//     id: 2,
//     name: "Flamin Hot Cheetos",
//     category: "food",
//     image: "https://static.openfoodfacts.org/images/products/896/400/009/0879/front_en.14.full.jpg",
//     source: "https://world.openfoodfacts.org/cgi/product_image.pl?code=8964000090879&id=front_en",
//     description: "No one knows what's in the powder that covers these snacks, but wow is it amazing!",
//     price: 1.5
// }

// let products = [product1, product2]
// GET 
// Store should return a list of Product objects 
class Store {
    static async displayProducts() {
        console.log('i made it here')
        let answer = [];
        allProducts.products.forEach(function(item) {
            answer.push(item) // do you guys actually want an array? and is it okay to start the products all already in the array?
        })
        return answer
    }
}
// Each product object should have name, image, and price 


// POST 
// Order: email of the person placing the order, item associated with the order
// Quantity of each item purchased


module.exports = Store