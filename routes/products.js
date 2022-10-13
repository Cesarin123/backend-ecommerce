const { Router } = require('express')

const router = Router()

const { getProducts,
        getProduct,
        createProduct,
        modifyProduct,
        deleteProduct } = require('../controllers/products')

/* CRUD PRODUCTS */ 

router.post('/api/v1/products', createProduct)

router.get('/api/v1/products', getProducts)

router.get('/api/v1/products/:prodId', getProduct)

router.put('/api/v1/products/:prodId', modifyProduct)

router.delete('/api/v1/products/:prodId', deleteProduct)


module.exports = router

