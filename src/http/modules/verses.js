
const db = require('../../services/mysql')

module.exports = function users (server) {
  server.get('verses/:id', async (req, res, next) => {
    try {
      res.send(await db.verses().one(req.params.id))
    } catch (error) {
      res.send(error)
    }
    next()
  })
}
