
const db = require('../../services/mysql')

module.exports = function verses (server) {
  server.get('books/:bookId/chapters/:chapterId/verses', async (req, res, next) => {
    const { bookId, chapterId } = req.params
    try {
      res.send(await db.verses().all(bookId, chapterId))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.get('books/:bookId/chapters/:chapterId/verses/:verseId', async (req, res, next) => {
    const {bookId, chapterId, verseId} = req.params
    try {
      res.send(await db.verses().one(bookId, chapterId, verseId))
    } catch (error) {
      res.send(error)
    }
    next()
  })
}
