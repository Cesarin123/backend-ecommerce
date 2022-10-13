const connection = require('../db_connect/connection')

/*Crear producto controlador*/

const createProduct = async (req, res) => {

    console.log("Creating product...")

    const { name, price, stock } = req.body

    try {
        
        const response =  await connection.query(
            `INSERT INTO products (name, price, stock)
                VALUES ($1, $2, $3)`, [name, price, stock]
                )
        
        if (response.rowCount > 0) {
        
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

/*Obtener productos controlador*/

const getProducts = async (req, res) => {

    console.log("Todos los productos");

    try {

        const response = await connection.query('SELECT * FROM products')

        res.status(200).send({

            data: response.rows

        })
    
    } catch (error) {

        res.status(400).send({

            error

        })
    }
}

/*Obtener producto controlador*/

const getProduct = async (req, res) => {

    console.log("Un producto")

    const id = parseInt(req.params.prodId)

    try {

        const response = await connection.query(
            `SELECT * FROM products WHERE id = $1`, [id]
        )

        if(response.rowCount > 0) {

            console.log("Product id: ", id)
            
            res.status(200).send({

                data: response.rows

            })
        } else{

            res.status(404).send({

                message: "Producto no encontrado"

            })

        }

    } catch (error) {

        res.status(404).send({

            error

        })
    }
}

/*Eliminar producto controlador*/

const deleteProduct = async (req, res) => {

    console.log("Eliminando un producto")

    const id = parseInt(req.params.prodId)

    try {

        const response = await connection.query(
            `DELETE FROM products WHERE id = $1`, [id]
        )

        if(response.rowCount > 0) {

            res.status(200).send({

                mensaje: "Eliminar producto"
        
            })
            
        }else{

            res.status(409).send({

                message: "No se pudo eliminar el producto en este momento"

            })

        }

    } catch (error) {

        res.status(404).send({

            error

        })
    }
}

/*Modificar producto controlador*/

const modifyProduct = async (req, res) => {

    console.log("Modificando producto...")

    const id = parseInt(req.params.prodId)

    const { name, price, stock } = req.body

    try { 

        const response =  await connection.query(
            `UPDATE products SET name = $1, price = $2, stock = $3
            WHERE id = $4`, [name, price, stock, id]
        )

        if(response.rowCount > 0){

            res.status(200).send({

                mensaje: "Editar producto"
        
            })
            
        }else{

            res.status(409).send({

                message: "No se pudo modificar el producto en este momento"
            })
        }
    
    } catch (error) {

        res.status(400).send({

            error

        })
    }
}



module.exports = {
    getProducts,
    getProduct,
    createProduct,
    modifyProduct,
    deleteProduct
}