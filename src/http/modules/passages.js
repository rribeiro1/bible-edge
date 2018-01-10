
const db = require('../../services/mysql')

module.exports = function users (server) {
  server.get('passages/:id', async (req, res, next) => {
    try {
      res.send(await db.passages().one(req.params.id))
    } catch (error) {
      res.send(error)
    }
    next()
  })
}
