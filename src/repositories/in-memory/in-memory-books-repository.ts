import { Book } from '@prisma/client'
import { BooksRepository } from '../books-repository'

export class InMemoryBooksRepository implements BooksRepository {
  private items: Book[] = [
    {
      id: 1,
      name: 'Genesis',
      abbrev: 'Gn',
      testament_id: 1,
    },
    {
      id: 2,
      name: 'Exodus',
      abbrev: 'Ex',
      testament_id: 1,
    },
  ]

  async findAll() {
    return this.items
  }
}
