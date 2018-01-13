
const books = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT * FROM books', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar livros', reject)
            return false
          }
          resolve({ books: results })
        })
      })
    }
  }
}

module.exports = books
