const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const massive = require('massive');
const controller = require('./controller');

app.use(bodyParser.json() );
require('dotenv').config();



massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance)
}).catch(err=>console.log(err))


app.get('/api/inventory', controller.get)


const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log('Listening on port ' + port);
})

