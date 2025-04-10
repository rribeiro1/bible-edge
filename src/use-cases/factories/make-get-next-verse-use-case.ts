import { PrismaVersesRepository } from '@/repositories/prisma/prisma-verses-repository'
import { GetNextVerseUseCase } from '../get-next-verse-use-case'

export function makeGetNextVerseUseCase() {
  const versesRepository = new PrismaVersesRepository()
  return new GetNextVerseUseCase(versesRepository)
}
