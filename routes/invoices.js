const { Router } = require('express')

const router = Router()

const { getOrders,
        createOrder } = require('../controllers/invoices')

/* CRUD INVOICES */ 

router.get('/api/v1/invoices', getOrders)

router.get('/api/v1/invoices', )

router.get('/api/v1/invoices/:invoiceId', )

router.put('/api/v1/invoices/:invoiceId', )

router.delete('/api/v1/invoices/:invoiceId', )


module.exports = router

