import { VersesRepository } from '@/repositories/verses-repository'
import { Verse } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetNextVerseUseCaseRequest {
  verseId: number
}

interface GetNextVerseUseCaseResponse {
  verse: Verse
}

export class GetNextVerseUseCase {
  constructor(private versesRepository: VersesRepository) {}

  async execute({
    verseId,
  }: GetNextVerseUseCaseRequest): Promise<GetNextVerseUseCaseResponse> {
    const nextVerse = verseId + 1
    const verse = await this.versesRepository.findById(nextVerse)
    if (!verse) {
      throw new ResourceNotFoundError()
    }
    return {
      verse,
    }
  }
}
