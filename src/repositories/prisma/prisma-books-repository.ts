import { BooksRepository } from '../books-repository'
import { prisma } from '@/repositories/prisma/prisma'

export class PrismaBooksRepository implements BooksRepository {
  async findAll() {
    return await prisma.book.findMany()
  }
}
