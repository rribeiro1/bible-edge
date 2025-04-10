import { VersesRepository } from '@/repositories/verses-repository'
import { Verse } from '@prisma/client'

interface GetVersesByBookAndChapterUseCaseRequest {
  bookId: number
  chapterId: number
}

interface GetVersesByBookAndChapterUseCaseResponse {
  verses: Verse[]
}

export class GetVersesByBookAndChapterUseCase {
  constructor(private versesRepository: VersesRepository) {}

  async execute({
    bookId,
    chapterId,
  }: GetVersesByBookAndChapterUseCaseRequest): Promise<GetVersesByBookAndChapterUseCaseResponse> {
    const verses = await this.versesRepository.findManyByBookAndChapter(
      bookId,
      chapterId,
    )
    return {
      verses,
    }
  }
}
