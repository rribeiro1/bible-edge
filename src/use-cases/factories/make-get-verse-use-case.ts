import { PrismaVersesRepository } from '@/repositories/prisma/prisma-verses-repository'
import { GetVerseUseCase } from '../get-verse-use-case'

export function makeGetVerseUseCase() {
  const versesRepository = new PrismaVersesRepository()
  return new GetVerseUseCase(versesRepository)
}
