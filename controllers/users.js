const connection = require('../db_connect/connection')


const createUser = async (req, res) => {

    console.log("Creating user...")

    const { name, email } = req.body

    try {

        const response = await connection.query(
            `INSERT INTO users (name, email)
                VALUES ($1, $2)`, [name, email]
                )

        if (response.rowCount > 0) {

            console.log("User created")

            res.status(201).send({

                message: "Usuario creado"

            })

        }else{

            res.status(409).send({

                message: "No se pudo crear el usuario en este momento."
            
            })

        }

    } catch (error) {

        console.log("error");

        res.status(409).send({

            error

        })
    }
}



const getUsers = async (req, res) => {

    console.log("Todos los usuarios")

    try {
        const response = await connection.query('SELECT * FROM users')
        
        res.status(200).send({
            data: response.rows
        })
    }catch (error) {
        res.status(404).send({
            error
        })
    }
}


const getUser = async (req, res) => {

    console.log("Un usuario")

    // const id = req.params.userId
    const id = parseInt(req.params.userId)

    try {

        const response = await connection.query(
            `SELECT * FROM users WHERE id = $1`, [id]
            )

        if(response.rowCount > 0) {
            
            console.log("Usuario: ", id)

            res.status(200).send({

                data: response.rows

            })

        } else{

            res.status(404).send({

                message: "Usuario no encontrado"
            
            })
        }

    } catch (error) {

        res.status(404).send({

            error

        })
    }
}

module.exports = { createUser, getUsers, getUser }