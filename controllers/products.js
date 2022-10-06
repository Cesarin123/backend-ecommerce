const connection = require('../db_connect/connection')

const getProducts = async (req, res) => {

    console.log("Getting products...");

    try {

        const response = await connection.query('SELECT * FROM products')

        res.status(200).send({
            data: response.rows
        })

        console.log("Mostando productos")
    
    } catch (error) {

        console.log("Server error")
        res.status(400).send({
            error
        })
    }

}

const getProduct = (req, res) => {

    console.log("Obteniendo producto...")

    res.status(200).send({

        mensaje: "Producto"

    })

}

const createProduct = async (req, res) => {

    console.log("Creating product...")

    const { name, price, stock } = req.body

    try {
        
        const response =  await connection.query(
            `INSERT INTO products (name, price, stock)
                VALUES ($1, $2, $3)`, [name, price, stock]
                )
        
        if (response.rowCount > 0) {

            console.log("Product created")
        
            res.status(200).send({

                mensaje: "Producto creado"
    
            })

        }else{

            res.status(409).send({

                message: "No se pudo crear el producto en este momento."
            
            })

        }

    } catch (error) {

        console.log("Server error")

        res.status(409).send({

            error

        })
    }
}


const editProduct = (req, res) => {

    console.log("Editando producto...")

    res.status(200).send({

        mensaje: "Editar producto"

    })

}


const deleteProduct = (req, res) => {

    console.log("Borrando producto")

    res.status(200).send({

        mensaje: "Eliminar producto"

    })

}

const home = (req, res) => {
    
    console.log("/products/ route")

    res.status(200).send({
        
        mensaje: "Hola mundo"
    
    });
}



module.exports = {
    getProducts,
    getProduct,
    createProduct,
    editProduct,
    deleteProduct,
    home
}