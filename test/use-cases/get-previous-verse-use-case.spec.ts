import { InMemoryVersesRepository } from '@/repositories/in-memory/in-memory-verses-repository'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { GetPreviousVerseUseCase } from '@/use-cases/get-previous-verse-use-case'
import { expect, describe, it, beforeEach } from 'vitest'

let versesRepository: InMemoryVersesRepository
let underTest: GetPreviousVerseUseCase

describe('Get Previous Verse Use Case', async () => {
  beforeEach(() => {
    versesRepository = new InMemoryVersesRepository()
    underTest = new GetPreviousVerseUseCase(versesRepository)
  })

  it('should be able to get the previous verse by id', async () => {
    const { verse } = await underTest.execute({ verseId: 2 })

    expect(verse).toEqual(
      expect.objectContaining({
        id: 1,
        book_id: 1,
        chapter: 1,
        verse: 1,
        version: 'NVI',
        text: 'In the beginning God created the heaven and the earth.',
      }),
    )
  })

  it('should not be able to get the previous verse when it does not exist', async () => {
    await expect(() =>
      underTest.execute({ verseId: 1000 }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
