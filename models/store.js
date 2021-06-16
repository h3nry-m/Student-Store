
const allProducts = require('../db.json') //if it's okay to put all the products into a json
const {NoCartError, NoUserError} = require('../utils/errors')
const { request } = require("express");


class Product {
    constructor(name, category, image, source, description, price) {
        this.name = name;
        this.category = category,
        this.image = image,
        this.source = source,
        this.description = description,
        this.price = price
    }
}

let product1 = new Product("Rice Krispies", "food", "https://upload.wikimedia.org/wikipedia/commons/c/cd/RKTsquares.jpg","https://en.wikipedia.org/wiki/Rice_Krispies_Treats","Delicious corn-based rice grains melted together with marshmallows into a square-like shape.", 0.99 )
let product2 = new Product("Flamin Hot Cheetos", "food",  "https://static.openfoodfacts.org/images/products/896/400/009/0879/front_en.14.full.jpg","https://world.openfoodfacts.org/cgi/product_image.pl?code=8964000090879&id=front_en", "No one knows what's in the powder that covers these snacks, but wow is it amazing!", 1.5)
let products = [product1, product2]

let o = {}
let key = "products"
// o[key] = JSON.stringify(products);
// o[key].push(product1)
// o[key].push(product2)
// console.log(products)
// console.log(JSON.stringify(o))


// questions
// for the GET /store request, is the answer an array of product objects in json format? or just the json format? cause the video looks like it's just the json format.
// i've created instances of products but in console logging it has a Product attached to it, is that OK for the GET response?
// - how do I create an ID that goes with the product? I think the one I get when doing forEach is jsut the index? 




class Store {
    static async displayProducts() {
        // console.log('i made it here')
        let answer = allProducts
    
        // if it needs to be in an array
        // let answer = [];
        // allProducts.products.forEach(function(item) { 
        //     answer.push(item) 
        // })
        return answer
    }


    static async orderProducts(info) {
        if (!("userInfo" in info)) {
            throw new NoUserError("No user info found to checkout with")
        }
        if (!("cart" in info)) {
            throw new NoCartError("No cart found to checkout")
        }
        // console.log(info.cart)
        let userInfo = info.userInfo
        let userName = userInfo.name
        let userEmail = userInfo.email
        // console.log(cart["Rice Krispies"]) // this is the only way to get the quantity
        console.log(userName)
        console.log(userEmail)
    }

};
// Each product object should have name, image, and price 


// POST 
// Order: email of the person placing the order, item associated with the order
// Quantity of each item purchased


module.exports = Store
// console.log(Store.displayProducts())