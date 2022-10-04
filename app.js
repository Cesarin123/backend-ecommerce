const express =  require('express')
const app = express()
const router = require('./routes/products')

/* Middlewares --> get data from request before getting
to the function */
app.use(express.json()) /* Allow communication thru JSON format */
app.use(express.urlencoded({extended: false}))

app.use(router)

/* Server startup on port 3000*/
app.listen(3000, (error) => {
    error ? console.log(error) : 
    console.log("Server started on port 3000")
})