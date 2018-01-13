
const passages = deps => {
  return {
    one: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        const query = 'select v.id, b.name as book, v.chapter, v.verse, v.text from verses as v inner join books as b on v.book = b.id where v.id = ?'

        connection.query(query, id, (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao listar passagem com id ${id}`, reject)
            return false
          }
          resolve({ passage: results[0] })
        })
      })
    },
    next: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        const query = 'select v.id, b.name as book, v.chapter, v.verse, v.text from verses as v inner join books as b on v.book = b.id where v.id > ? order by v.id limit 1'

        connection.query(query, id, (error, results) => {
          if (error || results[0] === undefined) {
            errorHandler(error, `Não existe passagem após o ID informado de: ${id}`, reject)
            return false
          }
          resolve({ passage: results[0] })
        })
      })
    },
    previous: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        const query = 'select v.id, b.name as book, v.chapter, v.verse, v.text from verses as v inner join books as b on v.book = b.id where v.id < ? order by v.id desc limit 1'

        connection.query(query, id, (error, results) => {
          if (error || results[0] === undefined) {
            errorHandler(error, `Não existe passagem anterior ao ID informado de: ${id}`, reject)
            console.log(passages)
            return false
          }
          resolve({ passage: results[0] })
        })
      })
    }
  }
}

module.exports = passages
