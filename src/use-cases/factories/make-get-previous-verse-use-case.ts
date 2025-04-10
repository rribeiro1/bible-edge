import { PrismaVersesRepository } from '@/repositories/prisma/prisma-verses-repository'
import { GetPreviousVerseUseCase } from '../get-previous-verse-use-case'

export function makeGetPreviousVerseUseCase() {
  const versesRepository = new PrismaVersesRepository()
  return new GetPreviousVerseUseCase(versesRepository)
}
