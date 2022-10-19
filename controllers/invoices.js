const connection = require('../db_connect/connection')

/*Crear ordenes controlador*/

const createOrder = async (req, res) => {

    console.log('Creating order...')

    const { id_product, id_user, quantity } = req.body

    try {

        const response = await connection.query(
            `INSERT INTO invoices (id_product, id_user, quantity)
                VALUES ($1, $2, $3)`, [id_product, id_user, quantity]
                )

        if(response.rowCount > 0) {

            res.status(201).send({

                message: "Orden creada"

            })
            
        }else{

            res.status(409).send({

                message: "No se pudo crear la orden en este momenot."

            })

        }

    }catch(error) {

        res.status(409).send({

            error

        })
    }
}

/*Obtener ordenes controlador*/

const getOrders = async (req, res) => {

    console.log("Todos las ordenes")

    try {

        const response = await connection.query('SELECT * FROM invoices')

        res.status(200).send({

            data: response.rows

        })

    }catch(error) {

        res.status(404).send({
        
            error
        
        })
    }
}



module.exports = {
    getOrders,
    createOrder
}