module.exports = {
    get: (req, res) => {
        const dbInstance = req.app.get('db');
        

        req.app.get('db').get_inventory()
        .then( products => res.send(products) )
        .catch(err=>{
            res.status(500).send('oops! something went wrong')
        })
    }
}

