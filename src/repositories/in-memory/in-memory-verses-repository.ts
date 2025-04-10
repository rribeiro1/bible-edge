import { Verse } from '@prisma/client'
import { Chapters, Verses, VersesRepository } from '../verses-repository'

export class InMemoryVersesRepository implements VersesRepository {
  private items: Verse[] = [
    {
      verse: 1,
      chapter: 1,
      book_id: 1,
      id: 1,
      text: 'In the beginning God created the heaven and the earth.',
      version: 'NVI',
    },
    {
      verse: 2,
      chapter: 1,
      book_id: 1,
      id: 2,
      text: 'And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.',
      version: 'NVI',
    },
    {
      verse: 3,
      chapter: 1,
      book_id: 1,
      id: 3,
      text: 'And God said, Let there be light: and there was light.',
      version: 'NVI',
    },
    {
      verse: 1,
      chapter: 2,
      book_id: 1,
      id: 4,
      text: 'Thus the heavens and the earth were finished, and all the host of them.',
      version: 'NVI',
    },
  ]

  async findById(id: number): Promise<Verse | null> {
    return this.items.find((verse) => verse.id === id) || null
  }

  async findChapterNumbers(bookId: number): Promise<Chapters | null> {
    const chapters = this.items
      .filter((verse) => verse.book_id === bookId)
      .map((verse) => verse.chapter)
    const uniqueChapters = Array.from(new Set(chapters))
    return uniqueChapters.length > 0 ? { chapters: uniqueChapters } : null
  }

  async findVerseNumbers(
    bookId: number,
    chapterId: number,
  ): Promise<Verses | null> {
    const verses = this.items
      .filter(
        (verse) => verse.book_id === bookId && verse.chapter === chapterId,
      )
      .map((verse) => verse.verse)
    const uniqueVerses = Array.from(new Set(verses))
    return uniqueVerses.length > 0 ? { verses: uniqueVerses } : null
  }

  async findManyByBookAndChapter(
    bookId: number,
    chapterId: number,
  ): Promise<Verse[]> {
    return this.items.filter(
      (verse) => verse.book_id === bookId && verse.chapter === chapterId,
    )
  }
}
