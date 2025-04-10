import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeGetNextVerseUseCase } from '@/use-cases/factories/make-get-next-verse-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getNextVerse(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getNextVerseSchema = z.object({
    verseId: z.coerce.number(),
  })
  const { verseId } = getNextVerseSchema.parse(request.params)
  const useCase = makeGetNextVerseUseCase()
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
