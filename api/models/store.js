
const allProducts = require('../data/db.json') //if it's okay to put all the products into a json
const {NoCartError, NoUserError} = require('../utils/errors')
const { request } = require("express");
const { storage } = require("../data/storage")


class Store {
    static async displayProduct(idNumber) {
        let product = storage.get("products").value()[idNumber-1]
        return product
    }

    static async displayProducts() {
        let answer = storage.get("products").value()
        return answer
    }


    static calculateTotal(cartInfo) {
        // dunno yet if should be a react-dom or an api call
        for (var item in cartInfo) {
            if (cartInfo.hasOwnProperty(item)) {
                console.log(item + " -> " + cartInfo[item]);
            }
        }
    }

    static findProductbyName(item) {
        // will find the product by name. return id number or attributes or create obj?
        storage.get("products").value().map((product, index) => {
            if (product.name == item) {
                console.log(product)
            }
        })
    }


    static async orderProducts(transaction) {
        // info comes with cart = items: quantity and userinfo = name, email
        if (!("userInfo" in transaction)) {
            throw new NoUserError("No user info found to checkout with")
        }
        if (!("cart" in transaction)) {
            throw new NoCartError("No cart found to checkout")
        }
        // console.log(info.cart)
        let userInfo = transaction.userInfo
        let userName = userInfo.name
        let userEmail = userInfo.email
        let cartInfo = transaction.cart
        let totalCost = Store.calculateTotal(cartInfo)
 
        // still haven't figured out what to write into the receipt
        // does it overwrite "orders:"? how to keep the same one?
        const newTransaction = { name: userName, email: userEmail}
        // console.log(newTransaction)
        // storage.get("orders").push(newTransaction).write()
    }

};

module.exports = Store




// console.log(Store.displayProducts())


// if have to build a product object
// class Product {
//     constructor(name, category, image, source, description, price) {
//         this.name = name;
//         this.category = category,
//         this.image = image,
//         this.source = source,
//         this.description = description,
//         this.price = price
//     }
// }

// let product1 = new Product("Rice Krispies", "food", "https://upload.wikimedia.org/wikipedia/commons/c/cd/RKTsquares.jpg","https://en.wikipedia.org/wiki/Rice_Krispies_Treats","Delicious corn-based rice grains melted together with marshmallows into a square-like shape.", 0.99 )
// let product2 = new Product("Flamin Hot Cheetos", "food",  "https://static.openfoodfacts.org/images/products/896/400/009/0879/front_en.14.full.jpg","https://world.openfoodfacts.org/cgi/product_image.pl?code=8964000090879&id=front_en", "No one knows what's in the powder that covers these snacks, but wow is it amazing!", 1.5)
// let products = [product1, product2]

// let o = {}
// let key = "products"


// questions
// i've created instances of products but in console logging it has a Product attached to it, is that OK for the GET response?
// - how do I create an ID that goes with the product? I think the one I get when doing forEach is jsut the index? 
