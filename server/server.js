require('dotenv').config()
const express = require('express')
const dotenv = require('dotenv')
const massive = require('massive')
const bodyParser = require('body-parser')
const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env



// Database  //
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.use(express.static(__dirname+'../build'))
app.use(bodyParser.json())


// //      Axios   //
app.get('/api/shelfie/bins', (req, res) => {
    const db = req.app.get('db')
    db.get_bin([req.query.bins])
    .then(resp=>{
        res.status(200).send(resp)
    })
    .catch(console.log)
})

app.get('/api/shelfie/getItem', (req,res)=>{
    const db = req.app.get('db')
    db.get_bin_item([req.query.id])
    .then(resp=>{
        res.status(200).send(resp[0])
    })
    .catch(console.log)
})

app.post('/api/shelfie/createItem', (req,res)=>{
    let { id, name, price } = req.body
    const db = req.app.get('db')
    db.add_items([id, name, price, id[0]])
    .then(resp=>{
        res.status(200).send(resp)
    })
    .catch(console.log)
})

app.put('/api/shelfie/editItem', (req, res)=>{
    const db = req.app.get('db')
    db.edit_items([req.body.binName, req.body.binPrice, req.query.id])
    .then(resp=>{
        db.get_bin_item([req.query.id])
        .then(response=>{
            res.status(200).send(response)
        })
        .catch(console.log)
    })
})

app.delete('/api/shelfie/delteItem', (req,res)=>{
    const db = req.app.get('db')
    db.remove_item([req.query.id])
    .then(resp=>{
        console.log(resp)
    })
    .catch(console.log)
})




app.listen(process.env.SERVER_PORT, () =>{
    console.log(`listening on port ${process.env.SERVER_PORT}`)
});




















