import { InMemoryVersesRepository } from '@/repositories/in-memory/in-memory-verses-repository'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { GetChapterNumbersUseCase } from '@/use-cases/get-chapter-numbers-use-case'
import { expect, describe, it, beforeEach } from 'vitest'

let versesRepository: InMemoryVersesRepository
let underTest: GetChapterNumbersUseCase

describe('Get Chapter Numbers Use Case', async () => {
  beforeEach(() => {
    versesRepository = new InMemoryVersesRepository()
    underTest = new GetChapterNumbersUseCase(versesRepository)
  })

  it('should be able to get chapter numbers of a specific book', async () => {
    const { chapters } = await underTest.execute({ bookId: 1 })

    expect(chapters).toHaveLength(2)
    expect(chapters).toEqual([1, 2])
  })

  it('should not be able to get chapters from book that does not exist', async () => {
    await expect(() =>
      underTest.execute({ bookId: 66 }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
