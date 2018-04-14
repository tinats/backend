const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const settings = require('./settings.json')

const envsettings = process.env.NODE_ENV == "production" ? settings.PROD : settings.DEV
const PORT = process.env.PORT || 3000

let app = express();

app.use(bodyParser.json())
app.use(helmet())

app.use('/', (req,res,next) => {
    res.send('Salut!')
    next()
})

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
})