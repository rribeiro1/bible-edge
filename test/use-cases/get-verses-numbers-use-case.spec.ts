import { InMemoryVersesRepository } from '@/repositories/in-memory/in-memory-verses-repository'
import { GetVerseNumbersUseCase } from '@/use-cases/get-verses-numbers-use-case'
import { expect, describe, it, beforeEach } from 'vitest'

let versesRepository: InMemoryVersesRepository
let underTest: GetVerseNumbersUseCase

describe('Get Verse Numbers Use Case', async () => {
  beforeEach(() => {
    versesRepository = new InMemoryVersesRepository()
    underTest = new GetVerseNumbersUseCase(versesRepository)
  })

  it('should be able to get verse numbers of a specific book and chapter', async () => {
    const { verses } = await underTest.execute({ bookId: 1, chapterId: 1 })

    expect(verses).toHaveLength(3)
    expect(verses).toEqual([1, 2, 3])
  })
})
