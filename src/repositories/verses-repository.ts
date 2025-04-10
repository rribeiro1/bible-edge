import { Verse } from '@prisma/client'

export interface Chapters {
  chapters: number[]
}

export interface VersesRepository {
  findById(id: number): Promise<Verse | null>
  findChapterNumbers(bookId: number): Promise<Chapters | null>
  findManyByBookAndChapter(bookId: number, chapterId: number): Promise<Verse[]>
}
