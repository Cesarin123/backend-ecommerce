const connection = require('../db_connect/connection')

/*Crear usuario controlador*/

const createUser = async (req, res) => {

    console.log("Creating user...")

    const { name, email } = req.body

    try {

        const response = await connection.query(
            `INSERT INTO users (name, email)
                VALUES ($1, $2)`, [name, email]
                )

        if (response.rowCount > 0) {

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

/*Obtener usuarios controlador*/

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

/*Obtener usuario controlador*/

const getUser = async (req, res) => {

    console.log("Un usuario")

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

/*Eliminar usuario controlador*/

const deleteUser = async (req, res) => {

    console.log("Eliminando un usuario...")

    const id = req.params.idUser

    try {

        const response = await connection.query(
            `DELETE FROM users WHERE id = $1`, [id]
        )

        if (response.rowCount > 0){

            res.status(200).send({

                message: "Usuario eliminado"
            
            })

        } else {

            res.status(409).send({

                message:"No se pudo eliminar el usuario en este momento"

            })

        }

    } catch (error) {

        res.status(400).send({

            error

        })
    }
}

/*Modificar usuario controlador*/

const modifyUser = async (req, res) => {

    console.log("Moficando un usuario...")

    const id = req.params.idUser

    const { name, email } = req.body

    try {

        const response = await connection.query(
           `UPDATE users SET name = $1, email = $2 
           WHERE id = $3`, [name, email, id] 
        )

        if (response.rowCount > 0) {

            res.status(200).send({

                message: "Usuario modificado"
            
            })

        } else {

            res.status(409).send({

                message: "No se pudo modificar el usuario en este momento"

            })

        }

    } catch (error) {

        res.status(400).send({

            error

        })
    }
}



module.exports = { 
    createUser, 
    getUsers,
    getUser, 
    deleteUser, 
    modifyUser 
}