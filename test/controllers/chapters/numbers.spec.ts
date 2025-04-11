import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'

describe('Chapters (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get chapter numbers of a book', async () => {
    const chapterNumbersResponse = await request(app.server).get(
      '/books/1/chapters',
    )
    expect(chapterNumbersResponse.statusCode).toEqual(200)
    console.log(chapterNumbersResponse.body)
    expect(chapterNumbersResponse.body.chapters).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40,
    ])
  })
})
