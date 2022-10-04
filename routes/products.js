const { Router } = require('express')

const router = Router()

const { getProducts,
    getProduct,
    putProduct,
    editProduct,
    deleteProduct,
    home } = require('../controllers/products')

/* CRUD PRODUCTS */ 

router.post('/products', putProduct)

router.get('/products', home)

router.get('/products/:productId', getProduct)

router.put('/products/:productId', editProduct)

router.delete('/products/:productId', deleteProduct)


module.exports = router

