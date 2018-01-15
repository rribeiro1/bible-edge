const books = require('./modules/books')
const chapters = require('./modules/chapters')
const passages = require('./modules/passages')
const verses = require('./modules/verses')

const routes = (server) => {
  books(server)
  chapters(server)
  verses(server)
  passages(server)
}

module.exports = routes
