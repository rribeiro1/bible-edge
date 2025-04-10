import { prisma } from '@/repositories/prisma/prisma'
import { VersesRepository } from '../verses-repository'

export class PrismaVersesRepository implements VersesRepository {
  async findById(id: number) {
    const verseId = Number(id)
    return await prisma.verse.findUnique({
      where: { id: verseId },
    })
  }

  async findChapterNumbers(bookId: number) {
    const chapters = await prisma.verse.findMany({
      where: { book_id: { equals: bookId } },
      distinct: ['chapter'],
      orderBy: { chapter: 'asc' },
      select: { chapter: true },
    })
    const chaptersList = chapters.map((chapter) => chapter.chapter)
    return chaptersList.length ? { chapters: chaptersList } : null
  }

  async findManyByBookAndChapter(bookId: number, chapterId: number) {
    const bookIdNumber = Number(bookId)
    const chapterIdNumber = Number(chapterId)
    return await prisma.verse.findMany({
      where: { book_id: bookIdNumber, chapter: chapterIdNumber },
    })
  }
}
