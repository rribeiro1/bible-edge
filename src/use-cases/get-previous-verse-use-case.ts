import { VersesRepository } from '@/repositories/verses-repository'
import { Verse } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetPreviousVerseUseCaseRequest {
  verseId: number
}

interface GetPreviousVerseUseCaseResponse {
  verse: Verse
}

export class GetPreviousVerseUseCase {
  constructor(private versesRepository: VersesRepository) {}

  async execute({
    verseId,
  }: GetPreviousVerseUseCaseRequest): Promise<GetPreviousVerseUseCaseResponse> {
    const previousVerse = verseId - 1
    const verse = await this.versesRepository.findById(previousVerse)
    if (!verse) {
      throw new ResourceNotFoundError()
    }
    return {
      verse,
    }
  }
}
