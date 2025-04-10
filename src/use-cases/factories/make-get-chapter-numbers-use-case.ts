import { GetChapterNumbersUseCase } from '../get-chapter-numbers-use-case'
import { PrismaVersesRepository } from '@/repositories/prisma/prisma-verses-repository'

export function makeGetChapterNumbersUseCase() {
  const versesRepository = new PrismaVersesRepository()
  return new GetChapterNumbersUseCase(versesRepository)
}
