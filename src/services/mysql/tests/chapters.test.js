
const test = require('ava')
const { connection, errorHandler } = require('./setup')
const dependencies = { connection, errorHandler }
const chapters = require('../chapters')(dependencies)

test('Obter Capítulos Gênesis', async t => {
  const expected = await chapters.all(0)
  t.is(expected.chapters.length, 50)
})
