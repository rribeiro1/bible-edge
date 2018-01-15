
const db = require('../../services/mysql')

module.exports = function passages (server) {
  server.get('/passages/:id', async (req, res, next) => {
    try {
      res.send(await db.passages().one(req.params.id))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.get('/passages/:id/next', async (req, res, next) => {
    try {
      res.send(await db.passages().next(req.params.id))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.get('/passages/:id/previous', async (req, res, next) => {
    try {
      res.send(await db.passages().previous(req.params.id))
    } catch (error) {
      res.send(error)
    }
    next()
  })
}
