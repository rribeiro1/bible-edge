import { InMemoryVersesRepository } from '@/repositories/in-memory/in-memory-verses-repository'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { GetVerseUseCase } from '@/use-cases/get-verse-use-case'
import { expect, describe, it, beforeEach } from 'vitest'

let versesRepository: InMemoryVersesRepository
let underTest: GetVerseUseCase

describe('Get Verse Use Case', async () => {
  beforeEach(() => {
    versesRepository = new InMemoryVersesRepository()
    underTest = new GetVerseUseCase(versesRepository)
  })

  it('should be able to get a verse by id', async () => {
    const { verse } = await underTest.execute({ verseId: 4 })

    expect(verse).toEqual(
      expect.objectContaining({
        id: 4,
        book_id: 1,
        chapter: 2,
        version: 'NVI',
        text: 'Thus the heavens and the earth were finished, and all the host of them.',
      }),
    )
  })

  it('should not be able to get verse that does not exist', async () => {
    await expect(() =>
      underTest.execute({ verseId: 1000 }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
