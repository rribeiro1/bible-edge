import { PrismaVersesRepository } from '@/repositories/prisma/prisma-verses-repository'
import { GetVersesByBookAndChapterUseCase } from '../get-verses-by-book-and-chapter-use-case'

export function makeGetVersesByBookAndChapterUseCase() {
  const versesRepository = new PrismaVersesRepository()
  return new GetVersesByBookAndChapterUseCase(versesRepository)
}
