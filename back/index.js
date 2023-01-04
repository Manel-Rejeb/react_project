const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)
mongoose.set('strictQuery', true)
mongoose.connect(
  'mongodb+srv://Admin:GTKIH7yaootNEKc5@cluster0.boukigc.mongodb.net/test'
)
const database = mongoose.connection

require('./routes/Note.route')(server)
require('./routes/Transaction.route')(server)

database.on('connected', () => console.log('mongoose connected'))
database.on('error', () => console.log('mongoose down'))
server.listen(7001, () => console.log('server listening on port 7001'))
