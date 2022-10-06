const { Router } = require('express')

const router = Router()

const {     getProducts,
    getProduct,
    createProduct,
    modifyProduct,
    deleteProduct} = require('../controllers/products')

/* CRUD PRODUCTS */ 

router.post('/products', createProduct)

router.get('/products', getProducts)

router.get('/products/:productId', getProduct)

router.put('/products/:productId', modifyProduct)

router.delete('/products/:productId', deleteProduct)


module.exports = router

