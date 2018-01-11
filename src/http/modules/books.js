
const db = require('../../services/mysql')

module.exports = function books (server) {
  server.get('books/', async (req, res, next) => {
    try {
      res.send(await db.books().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })
}
