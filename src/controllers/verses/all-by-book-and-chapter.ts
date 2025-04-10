import { makeGetVersesByBookAndChapterUseCase } from '@/use-cases/factories/make-verses-by-book-and-chapter-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getVersesByBookAndChapter(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getVersesByBookAndChapterSchema = z.object({
    bookId: z.coerce.number(),
    chapterId: z.coerce.number(),
  })
  const { bookId, chapterId } = getVersesByBookAndChapterSchema.parse(
    request.params,
  )
  const useCase = makeGetVersesByBookAndChapterUseCase()
  const { verses } = await useCase.execute({
    bookId,
    chapterId,
  })
  return reply.status(200).send({ verses })
}
