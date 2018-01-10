const verses = require('./modules/verses')
const db = require('../services/mysql')

const routes = (server) => {
  verses(server)
}

module.exports = routes
