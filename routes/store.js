const express = require("express")
// const GiftExchange = require("../models/gift-exchange")
const router = express.Router() // instantiate a router from the express package
const allProducts = require('../db.json')
const Store = require('../models/store')
// test
// let products = {
//     name: "Pen",
//     image: "link",
//     price: "$3.23"
// }

// GET 
// Store should return a list of Product objects 
router.get("/", async (req, res, next) => {
    let test = await Store.displayProducts()
    console.log(test)
    res.status(200).json(test)
})

router.post("/order", async (req, res, next) => {
    // console.log(req.body)
    let cart = req.body.cart //dunno how to get the items in the cart unless i store it differently
    console.log(cart)
    let userInfo = req.body.userInfo
    let userName = userInfo.name
    let userEmail = userInfo.email
    console.log(cart["Rice Krispies"]) // this is the only way to get the quantity
    console.log(userName)
    console.log(userEmail)
    res.status(200).json({ping:"pong"})
})


// POST 
// Order: email of the person placing the order, item associated with the order
// Quantity of each item purchased




module.exports = router