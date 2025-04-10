import { InMemoryVersesRepository } from '@/repositories/in-memory/in-memory-verses-repository'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { GetVersesByBookAndChapterUseCase } from '@/use-cases/get-verses-by-book-and-chapter-use-case'
import { expect, describe, it, beforeEach } from 'vitest'

let versesRepository: InMemoryVersesRepository
let underTest: GetVersesByBookAndChapterUseCase

describe('Get Verses By Book and Chapter Use Case', async () => {
  beforeEach(() => {
    versesRepository = new InMemoryVersesRepository()
    underTest = new GetVersesByBookAndChapterUseCase(versesRepository)
  })

  it('should be able to get verses by book and chapter', async () => {
    const { verses } = await underTest.execute({ bookId: 1, chapterId: 1 })

    expect(verses).toHaveLength(3)
    expect(verses).toEqual([
      expect.objectContaining({
        text: 'In the beginning God created the heaven and the earth.',
      }),
      expect.objectContaining({
        text: 'And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.',
      }),
      expect.objectContaining({
        text: 'And God said, Let there be light: and there was light.',
      }),
    ])
  })

  it('should not be able to get verses when book or chapter does not exist', async () => {
    await expect(() =>
      underTest.execute({ bookId: 1000, chapterId: 1000 }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
