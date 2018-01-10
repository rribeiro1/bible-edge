
const test = require('ava')
const { connection, errorHandler } = require('./setup')
const dependencies = { connection, errorHandler }
const verses = require('../verses')(dependencies)

test('Obter versículo #1', async t => {
  const expected = await verses.one(1)
  t.is(expected.verses.text, 'No princípio Deus criou os céus e a terra.')
})