const { Router } = require('express')

const router = Router()

const { createUser, getUsers, getUser } = require('../controllers/users')

/* CRUD USERS */ 

router.post('/users', createUser )

router.get('/users', getUsers )

router.get('/users/:userId', getUser)

router.put('/users/:userId', )

router.delete('/users/:userId', )


module.exports = router

