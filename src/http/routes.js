const passages = require('./modules/passages')
const books = require('./modules/books')
const db = require('../services/mysql')

const routes = (server) => {
  passages(server)
  books(server)
}

module.exports = routes
