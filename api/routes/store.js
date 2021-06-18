const express = require("express")
const router = express.Router() // instantiate a router from the express package
const Store = require('../models/store')


// for ALL items in the store 
router.get("/", async (req, res, next) => {
    let products = await Store.displayProducts()
    res.status(200).json({products})
})


// for posting a new order
router.post("/order", async (req, res, next) => {
    try {
        let test = await Store.orderProducts(req.body)
        res.status(200).json({ping:"pong"})
    } catch(err) {
        next(err)
    }
})

// for getting a number by ID 
router.get("/:idNumber", async (req,res,next) => {
    const idNumber = req.params.idNumber
    let product = await Store.displayProduct(idNumber)
    res.status(200).json(product)
})


module.exports = router