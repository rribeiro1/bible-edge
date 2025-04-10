import { BooksRepository } from '@/repositories/books-repository'
import { Book } from '@prisma/client'

interface GetBooksUseCaseResponse {
  books: Book[]
}

export class GetBooksUseCase {
  constructor(private booksRepository: BooksRepository) {}

  async execute(): Promise<GetBooksUseCaseResponse> {
    const books = await this.booksRepository.findAll()
    return {
      books,
    }
  }
}
