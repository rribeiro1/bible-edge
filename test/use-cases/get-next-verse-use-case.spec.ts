import { InMemoryVersesRepository } from '@/repositories/in-memory/in-memory-verses-repository'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { GetNextVerseUseCase } from '@/use-cases/get-next-verse-use-case'
import { expect, describe, it, beforeEach } from 'vitest'

let versesRepository: InMemoryVersesRepository
let underTest: GetNextVerseUseCase

describe('Get Next Verse Use Case', async () => {
  beforeEach(() => {
    versesRepository = new InMemoryVersesRepository()
    underTest = new GetNextVerseUseCase(versesRepository)
  })

  it('should be able to get the next verse by id', async () => {
    const { verse } = await underTest.execute({ verseId: 1 })

    expect(verse).toEqual(
      expect.objectContaining({
        id: 2,
        book_id: 1,
        chapter: 1,
        verse: 2,
        version: 'NVI',
        text: 'And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.',
      }),
    )
  })

  it('should not be able to get the next verse when it does not exist', async () => {
    await expect(() =>
      underTest.execute({ verseId: 1000 }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
