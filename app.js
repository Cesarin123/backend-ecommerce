const express =  require('express');
const app = express()
const router = require('router')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(router)

app.listen(3000, (error) => {
    error ? console.log(error) : 
    console.log("Server started on port 3000")
})