
const verses = deps => {
  return {
    all: (bookId, chapterId) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        const query = 'select v.id, b.name as book, v.chapter, v.verse, v.text from verses as v inner join books as b on v.book = b.id where v.book = ? and v.chapter = ?'
        const params = [bookId, chapterId]

        connection.query(query, params, (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar versículos', reject)
            return false
          }
          resolve({ verses: results })
        })
      })
    },
    one: (bookId, chapterId, verseId) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        const query = 'select v.id, b.id as bookId, b.name as book, v.chapter, v.verse, v.text from verses as v inner join books as b on v.book = b.id where v.book = ? and v.chapter = ? and v.verse = ?'
        const params = [bookId, chapterId, verseId]

        connection.query(query, params, (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao listar versículo ${verseId} referente ao capítulo ${chapterId} do livro ${bookId}`, reject)
            return false
          }
          resolve({ verse: results[0] })
        })
      })
    }
  }
}

module.exports = verses
