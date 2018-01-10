require('dotenv').config()

const server = require('./server')

server.listen(process.env.PORT)
