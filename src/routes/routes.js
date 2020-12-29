const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')


//cadastro
router.post('/create', controller.createProduct)
    
router.get('/products', controller.getProducts)

module.exports = router