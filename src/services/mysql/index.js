
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

const errorHandler = (error, msg, rejectFunction) => {
  if (error) console.error(error)
  rejectFunction({ error: msg })
}

const dependencies = { connection, errorHandler }

const booksModule = require('./books')(dependencies)
const chaptersModule = require('./chapters')(dependencies)
const versesModule = require('./verses')(dependencies)
const passagesModule = require('./passages')(dependencies)

module.exports = {
  books: () => booksModule,
  chapters: () => chaptersModule,
  passages: () => passagesModule,
  verses: () => versesModule
}
