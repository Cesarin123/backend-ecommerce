const { Router } = require('express')

const router = Router()

const { getProducts,
    getProduct,
    createProduct,
    editProduct,
    deleteProduct,
    home } = require('../controllers/products')

/* CRUD PRODUCTS */ 

router.post('/products', createProduct)

router.get('/products', getProducts)

router.get('/products/:productId', getProduct)

router.put('/products/:productId', editProduct)

router.delete('/products/:productId', deleteProduct)


module.exports = router

