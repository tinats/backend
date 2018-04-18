const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const settings = require('./settings.json')

const mongoose = require('mongoose')

const Billet = require('./lib/model/billet')

const PORT = process.env.PORT || 3000

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(helmet())

app.use('/', (req,res,next) => {
    res.send('Salut!')
    next()
})

mongoose.connect('mongodb://localhost/test');

let _billet = new Billet({
    name: 'Belzebut'
})

_billet.save()
.then(data => console.log('meow'))

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
})