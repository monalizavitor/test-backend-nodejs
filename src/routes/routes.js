const express = require('express')
const router = express.Router()

const controller = require('../controller/controller')


// PRODUCT REGISTRATION
router.post('/create', controller.createProduct)

// GET ALL PRODUCTS
router.get('/all', controller.getProducts)

// GET PRODUCT BY ID
router.get('/:id', controller.getById)

//GET PRODUCTS BY CATEGORY
router.get('/category/:category', controller.getByCategory)

//UPDATE PRODUCTS BY BODY
router.put('/update/:id', controller.updateProduct)

//DELETE PRODUCTS BY ID
router.delete('/delete/:id', controller.deleteProduct)


module.exports = router