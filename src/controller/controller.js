const productCollection = require('../model/schema')

const createProduct = (req, res) => {

    const body = req.body

    const newProduct = new productCollection(body)

    newProduct.save((error) => {
        if (error)
            res.status(500).send(error)
    })

    res.status(201).send({ 
        message: 'Produto criado com sucesso !', newProduct 
    })

}


const getProducts = (req, res) => {
    productCollection.find((error, product) => {
        if (error)
            return res.status(500).send(error)
        return res.status(200).send(product)
    })
}

module.exports = {
    createProduct, 
    getProducts
}