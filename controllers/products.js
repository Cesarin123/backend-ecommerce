const getProducts= (req, res) => {

    console.log("Obteniendo productos");

    res.status(200).send({
        
        mensaje: "Productos"

    })

}

const getProduct = (req, res) => {

    console.log("Obteniendo producto...")

    res.status(200).send({

        mensaje: "Producto"

    })

}

const putProduct = (req, res) => {

    console.log("Creando producto...")

    res.status(200).send({

        mensaje: "Crear producto"

    })

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
    
    console.log("/api/ route")

    res.status(200).send({
        
        mensaje: "Hola mundo"
    
    });
}

module.exports = {
    getProducts,
    getProduct,
    putProduct,
    editProduct,
    deleteProduct,
    home
}