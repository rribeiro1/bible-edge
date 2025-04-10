import { makeGetChapterNumbersUseCase } from '@/use-cases/factories/make-get-chapter-numbers-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getChapterNumbersByBook(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getChapterNumbersSchema = z.object({
    bookId: z.coerce.number(),
  })
  const { bookId } = getChapterNumbersSchema.parse(request.params)
  const useCase = makeGetChapterNumbersUseCase()
  const { chapters } = await useCase.execute({ bookId })
  return reply.status(200).send({ chapters })
}
