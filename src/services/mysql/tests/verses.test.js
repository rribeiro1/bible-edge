
const test = require('ava')
const { connection, errorHandler } = require('./setup')
const dependencies = { connection, errorHandler }
const verses = require('../verses')(dependencies)

test('Obter Versículos de Gênesis Capítulo 1', async t => {
  const expected = await verses.all(0, 1)
  t.is(expected.verses.length, 31)
})

test('Obter Versículos de Apocalipse Capítulo 22', async t => {
  const expected = await verses.all(65, 22)
  t.is(expected.verses.length, 21)
})

test('Obter Capítulo 4 Versículo 3', async t => {
  const expected = await verses.one(0, 4, 3)
  t.is(expected.verse.text, 'Passado algum tempo, Caim trouxe do fruto da terra uma oferta ao Senhor.')
})
