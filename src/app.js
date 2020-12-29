require('dotenv-safe').config()

const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


// connection with mongoDB
let db = require('./config/database')
db.connect()

const routes = require('./routes/routes')
app.use('/product', routes)


module.exports = app