const { Pool } = require('pg')

const database = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'ecommerce-backend',
    port: '5432'
})

database.connect(function(err) {
    if (err) throw err;
    console.log("Connection established")
})

module.exports = database