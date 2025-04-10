import { FastifyInstance } from 'fastify'
import { getAllBooks } from './books/all'
import { getChapterNumbersByBook } from './chapters/numbers'
import { getVerseById } from './verses/one'
import { getNextVerse } from './verses/next'
import { getPreviousVerse } from './verses/previous'
import { getVersesByBookAndChapter } from './verses/all-by-book-and-chapter'

export async function bibleRoutes(app: FastifyInstance) {
  app.get('/books', getAllBooks)
  app.get('/books/:bookId/chapters', getChapterNumbersByBook)
  app.get(
    '/books/:bookId/chapters/:chapterId/verses',
    getVersesByBookAndChapter,
  )
  app.get('/verses/:verseId', getVerseById)
  app.get('/verses/:verseId/next', getNextVerse)
  app.get('/verses/:verseId/previous', getPreviousVerse)
}
