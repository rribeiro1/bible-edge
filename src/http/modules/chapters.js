
const db = require('../../services/mysql')

module.exports = function chapters (server) {
  server.get('/books/:bookId/chapters', async (req, res, next) => {
    try {
      res.send(await db.chapters().all(req.params.bookId))
    } catch (error) {
      res.send(error)
    }
    next()
  })
}
