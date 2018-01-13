
const chapters = deps => {
  return {
    all: (bookId) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        const query = 'SELECT DISTINCT chapter FROM verses WHERE book = ?'

        connection.query(query, bookId, (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar capítulos', reject)
            return false
          }
          resolve({ chapters: results })
        })
      })
    }
  }
}

module.exports = chapters
