
const passages = deps => {
  return {
    one: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT verses.id AS id, ' +
                         'books.name       AS book, ' +
                         'verses.chapter	 AS chapter, ' +
                         'verses.verse 	   AS verse, ' +
                         'verses.text ' + 
                         'FROM verses ' +
                         'INNER JOIN books ON verses.book = books.id ' +
                         'WHERE verses.id = ?', id, (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar versículo', reject)
            return false
          }
          resolve({ passage: results[0] })
        })
      })
    }
  }
}

module.exports = passages
