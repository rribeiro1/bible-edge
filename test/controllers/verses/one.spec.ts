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

  it('should be able to get a verse by id', async () => {
    const verseResponse = await request(app.server).get('/verses/2')
    expect(verseResponse.statusCode).toEqual(200)
    expect(verseResponse.body.verse).toEqual({
      book_id: 0,
      chapter: 1,
      id: 2,
      text: 'Era a terra sem forma e vazia; trevas cobriam a face do abismo, e o Espírito de Deus se movia sobre a face das águas.',
      verse: 2,
      version: 'nvi',
    })
  })

  it('should return 404 if verse not found', async () => {
    const verseResponse = await request(app.server).get('/verses/99999999')
    expect(verseResponse.statusCode).toEqual(404)
    expect(verseResponse.body).toEqual({
      message: 'Verse not found',
    })
  })
})
