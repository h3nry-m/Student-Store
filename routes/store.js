const express = require("express")
// const GiftExchange = require("../models/gift-exchange")
const router = express.Router() // instantiate a router from the express package


let products = {
    name: "Pen",
    image: "link",
    price: "$3.23"
}

// GET 
// Store should return a list of Product objects 
router.get("/", async (req, res, next) => {
    res.status(200).json(products)
})


// Each product object should have name, image, and price 


// POST 
// Order: email of the person placing the order, item associated with the order
// Quantity of each item purchased




module.exports = router