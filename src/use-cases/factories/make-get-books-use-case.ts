import { PrismaBooksRepository } from '@/repositories/prisma/prisma-books-repository'
import { GetBooksUseCase } from '../get-books-use-case'

export function makeGetBooksUseCase() {
  const booksRepository = new PrismaBooksRepository()
  return new GetBooksUseCase(booksRepository)
}
