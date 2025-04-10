import { VersesRepository } from '@/repositories/verses-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetVerseNumbersUseCaseRequest {
  bookId: number
  chapterId: number
}

interface GetVerseNumbersUseCaseResponse {
  verses: number[]
}

export class GetVerseNumbersUseCase {
  constructor(private versesRepository: VersesRepository) {}

  async execute({
    bookId,
    chapterId,
  }: GetVerseNumbersUseCaseRequest): Promise<GetVerseNumbersUseCaseResponse> {
    const response = await this.versesRepository.findVerseNumbers(
      bookId,
      chapterId,
    )
    if (!response) {
      throw new ResourceNotFoundError()
    }
    return {
      verses: response.verses,
    }
  }
}
