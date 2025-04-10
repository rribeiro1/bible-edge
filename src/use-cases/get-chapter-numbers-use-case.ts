import { VersesRepository } from '@/repositories/verses-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetChapterNumbersUseCaseRequest {
  bookId: number
}

interface GetChapterNumbersUseCaseResponse {
  chapters: number[]
}

export class GetChapterNumbersUseCase {
  constructor(private versesRepository: VersesRepository) {}

  async execute({
    bookId,
  }: GetChapterNumbersUseCaseRequest): Promise<GetChapterNumbersUseCaseResponse> {
    const response = await this.versesRepository.findChapterNumbers(bookId)
    if (!response) {
      throw new ResourceNotFoundError()
    }
    return {
      chapters: response.chapters,
    }
  }
}
