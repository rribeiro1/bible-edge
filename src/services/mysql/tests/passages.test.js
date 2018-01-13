
const test = require('ava')
const { connection, errorHandler } = require('./setup')
const dependencies = { connection, errorHandler }
const passages = require('../passages')(dependencies)

test('Obter Passagem por Id', async t => {
  const expected = await passages.one(1)
  t.is(expected.passage.text, 'No princípio Deus criou os céus e a terra.')
})
