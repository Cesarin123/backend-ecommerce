const { Router } = require('express')

const router = Router()

const { createUser,
        getUsers,
        getUser, 
        deleteUser,
        modifyUser } = require('../controllers/users')

/* CRUD USERS */ 

router.post('/api/v1/users', createUser)

router.get('/api/v1/users', getUsers)

router.get('/api/v1/users/:userId', getUser)

router.put('/api/v1/users/:userId', modifyUser)

router.delete('/api/v1/users/:userId', deleteUser )


module.exports = router

