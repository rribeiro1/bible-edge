
const test = require('ava')
const { connection, errorHandler } = require('./setup')
const dependencies = { connection, errorHandler }
const books = require('../books')(dependencies)

test('Obter a lista de livros da Bíblia', async t => {
    const list = await books.all()
    t.is(list.books.length, 66)
    t.is(list.books[0].name, 'Gênesis')
})