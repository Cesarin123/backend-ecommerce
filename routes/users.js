const { Router } = require('express')

const router = Router()

const { createUser,
        getUsers,
        getUser, 
        deleteUser,
        modifyUser } = require('../controllers/users')

/* CRUD USERS */ 

router.post('/users', createUser)

router.get('/users', getUsers)

router.get('/users/:userId', getUser)

router.put('/users/:userId', modifyUser)

router.delete('/users/:userId', deleteUser )


module.exports = router

