// require('dotenv-safe').config()


const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


//conexão com o mongo
let db = require('./config/database')
db.connect()

const routes = require('./routes/routes')
app.use('/', routes)


module.exports = app