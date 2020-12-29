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


const getById = (req, res) => {

    const id = req.params.id

    productCollection.findById(id, (error, product) => {
        if (error)
            return res.status(404).send({ message: 'Id do produto não foi encontrado!' })

        return res.status(200).send({ message: 'Produto encontrado!', product })

    })

}

const getByCategory = (req, res) => {

    const category = req.params

    productCollection.find(category, (error, product) => {
        if (error)
            return res.status(500).send(error)

        if (product)
            return res.status(200).send({ message: 'Category found successfully! ', product })

        return res.status(404).send({ message: 'Category is not found!' })

    })

}

const updateProduct = (req, res) => {

    const id = req.params.id
    const body = req.body
    const update = { new: true }

    productCollection.findByIdAndUpdate(
        id,
        body,
        update,
        (error, product) => {
            if (error)
                return res.status(500).send(error)

            return res.status(200).send({
                message: 'Successfully edited product! ', product
            })

        }
    )

}

module.exports = {
    createProduct,
    getProducts,
    getById,
    getByCategory,
    updateProduct
}