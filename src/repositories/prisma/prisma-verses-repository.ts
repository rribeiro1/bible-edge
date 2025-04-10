import { Book, Verse } from '@prisma/client'
import { prisma } from '@/repositories/prisma/prisma'
import { Chapters, Verses, VersesRepository } from '../verses-repository'

export class PrismaVersesRepository implements VersesRepository {
  async findById(id: string): Promise<Verse | null> {
    const verseId = Number(id)
    return await prisma.verse.findUnique({
      where: { id: verseId },
    })
  }

  async findChapterNumbers(bookId: number): Promise<Chapters | null> {
    const chapters = await prisma.verse.findMany({
      where: { book_id: { equals: bookId } },
      distinct: ['chapter'],
      orderBy: { chapter: 'asc' },
      select: { chapter: true },
    })
    const chaptersList = chapters.map((chapter) => chapter.chapter)
    return chaptersList.length ? { chapters: chaptersList } : null
  }

  async findVerseNumbers(
    bookId: number,
    chapterId: number,
  ): Promise<Verses | null> {
    const bookIdNumber = Number(bookId)
    const chapterIdNumber = Number(chapterId)
    const verses = await prisma.verse.findMany({
      where: { book_id: bookIdNumber, chapter: chapterIdNumber },
      select: { id: true },
    })
    const versesList = verses.map((verse) => verse.id)
    return versesList.length ? { verses: versesList } : null
  }

  async findManyByBookAndChapter(
    bookId: string,
    chapterId: string,
  ): Promise<Verse[]> {
    const bookIdNumber = Number(bookId)
    const chapterIdNumber = Number(chapterId)
    return await prisma.verse.findMany({
      where: { book_id: bookIdNumber, chapter: chapterIdNumber },
    })
  }

  async findAll(): Promise<Book[]> {
    return await prisma.book.findMany()
  }
}
