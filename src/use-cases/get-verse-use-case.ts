import { VersesRepository } from '@/repositories/verses-repository'
import { Verse } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetVerseUseCaseRequest {
  verseId: number
}

interface GetVerseUseCaseResponse {
  verse: Verse
}

export class GetVerseUseCase {
  constructor(private versesRepository: VersesRepository) {}

  async execute({
    verseId,
  }: GetVerseUseCaseRequest): Promise<GetVerseUseCaseResponse> {
    const verse = await this.versesRepository.findById(verseId)
    if (!verse) {
      throw new ResourceNotFoundError()
    }
    return {
      verse,
    }
  }
}
