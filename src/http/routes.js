const passages = require('./modules/passages')
const db = require('../services/mysql')

const routes = (server) => {
  passages(server)
}

module.exports = routes
