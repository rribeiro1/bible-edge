import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'

describe('Books (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get all books', async () => {
    const booksResponse = await request(app.server).get('/books')
    expect(booksResponse.statusCode).toEqual(200)
    expect(booksResponse.body.books).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 0,
          name: 'Gênesis',
          abbrev: 'gn',
          testament_id: 1,
        }),
        expect.objectContaining({
          id: 65,
          name: 'Apocalipse',
          abbrev: 'ap',
          testament_id: 2,
        }),
      ]),
    )
  })
})
