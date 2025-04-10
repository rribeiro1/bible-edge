import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeGetPreviousVerseUseCase } from '@/use-cases/factories/make-get-previous-verse-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getPreviousVerse(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getPreviousVerseSchema = z.object({
    verseId: z.coerce.number().min(2),
  })
  const { verseId } = getPreviousVerseSchema.parse(request.params)
  const useCase = makeGetPreviousVerseUseCase()
  try {
    const { verse } = await useCase.execute({ verseId })
    return reply.status(200).send({ verse })
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: 'Verse not found',
      })
    }
  }
}
