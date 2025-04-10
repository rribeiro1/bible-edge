import { InMemoryVersesRepository } from '@/repositories/in-memory/in-memory-verses-repository'
import { GetVersesByBookAndChapterUseCase } from '@/use-cases/get-verses-by-book-and-chapter-use-case'
import { expect, describe, it, beforeEach } from 'vitest'

let versesRepository: InMemoryVersesRepository
let underTest: GetVersesByBookAndChapterUseCase

describe('Get Verses By Book and Chapter Use Case', async () => {
  beforeEach(() => {
    versesRepository = new InMemoryVersesRepository()
    underTest = new GetVersesByBookAndChapterUseCase(versesRepository)
  })

  it('should be able to get verses of a specific book and chapter', async () => {
    const { verses } = await underTest.execute({ bookId: 1, chapterId: 1 })

    expect(verses).toHaveLength(3)
    expect(verses).toEqual([
      expect.objectContaining({ id: 1, book_id: 1, chapter: 1 }),
      expect.objectContaining({ id: 2, book_id: 1, chapter: 1 }),
      expect.objectContaining({ id: 3, book_id: 1, chapter: 1 }),
    ])
  })

  it('should return an empty list if no verses are found', async () => {
    const { verses } = await underTest.execute({ bookId: 10, chapterId: 10 })
    expect(verses).toHaveLength(0)
  })
})
