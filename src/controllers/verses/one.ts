import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeGetVerseUseCase } from '@/use-cases/factories/make-get-verse-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getVerseById(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getVerseByIdSchema = z.object({
    verseId: z.coerce.number(),
  })
  const { verseId } = getVerseByIdSchema.parse(request.params)
  const useCase = makeGetVerseUseCase()
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
