const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')


//PRODUCT REGISTRATION
router.post('/create', controller.createProduct)

//GET ALL PRODUCTS
router.get('/products', controller.getProducts)

//GET PRODUCT BY ID
router.get('/product/:id', controller.getById)

//GET PRODUCTS BY CATEGORY
router.get('/products/:category', controller.getByCategory)

//UPDATE PRODUCTS BY BODY
router.put('/product/update/:id', controller.updateProduct)



module.exports = router