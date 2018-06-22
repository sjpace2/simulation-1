module.exports = {
    get: (req, res) => {
        const dbInstance = req.app.get('db');
        

        req.app.get('db').get_inventory()
        .then( products => res.send(products) )
        .catch(err=>{
            res.status(500).send('oops! something went wrong')
        })
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, price, imageURL} = req.body;
        
        dbInstance.create_product([name, price, imageURL]).then((products)=>{
            res.status(200).send(products.push[req.body])
        }).catch(err=>{
            res.status(500).send('oops! something went wrong')
        })

    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.delete_product(id)
        .then(()=> res.status(200).send(response) )
    }
}

