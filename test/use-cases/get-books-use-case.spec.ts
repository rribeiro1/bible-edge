import { InMemoryBooksRepository } from '@/repositories/in-memory/in-memory-books-repository'
import { GetBooksUseCase } from '@/use-cases/get-books-use-case'
import { expect, describe, it, beforeEach } from 'vitest'

let booksRepository: InMemoryBooksRepository
let underTest: GetBooksUseCase

describe('Get Books Use Case', async () => {
  beforeEach(() => {
    booksRepository = new InMemoryBooksRepository()
    underTest = new GetBooksUseCase(booksRepository)
  })

  it('should be able to get all books', async () => {
    const { books } = await underTest.execute()

    expect(books).toHaveLength(2)
    expect(books).toEqual([
      expect.objectContaining({ id: 1, name: 'Genesis', abbrev: 'Gn' }),
      expect.objectContaining({ id: 2, name: 'Exodus', abbrev: 'Ex' }),
    ])
  })
})
