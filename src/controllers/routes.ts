import { FastifyInstance } from 'fastify'
import { getAllBooks } from './books'
import { getChapterNumbersByBook } from './chapters'

export async function bibleRoutes(app: FastifyInstance) {
  app.get('/books', getAllBooks)
  app.get('/books/:bookId/chapters', getChapterNumbersByBook)
}
