
const verses = deps => {
  return {
    one: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT * FROM verses WHERE id = ?', id, (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar versículo', reject)
            return false
          }
          resolve({ verses: results[0] })
        })
      })
    }
  }
}

module.exports = verses
