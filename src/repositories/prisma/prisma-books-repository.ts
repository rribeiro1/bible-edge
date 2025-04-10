import { Book } from '@prisma/client'
import { BooksRepository } from '../books-repository'
import { prisma } from '@/repositories/prisma/prisma'

export class PrismaBooksRepository implements BooksRepository {
  async findAll(): Promise<Book[]> {
    return await prisma.book.findMany()
  }
}
