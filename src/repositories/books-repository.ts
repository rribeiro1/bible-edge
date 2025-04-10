import { Book } from '@prisma/client'

export interface BooksRepository {
  findAll(): Promise<Book[]>
}
