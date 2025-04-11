import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'

describe('Verses (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get all verses by book and chapter', async () => {
    const versesResponse = await request(app.server).get(
      '/books/0/chapters/1/verses',
    )
    expect(versesResponse.statusCode).toEqual(200)
    console.log(versesResponse.body)
    expect(versesResponse.body.verses).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          version: 'nvi',
          chapter: 1,
          verse: 1,
          text: 'No princípio Deus criou os céus e a terra.',
          book_id: 0,
        }),
        expect.objectContaining({
          id: 31,
          version: 'nvi',
          chapter: 1,
          verse: 31,
          text: 'E Deus viu tudo o que havia feito, e tudo havia ficado muito bom. Passaram-se a tarde e a manhã; esse foi o sexto dia.',
          book_id: 0,
        }),
      ]),
    )
  })
})
