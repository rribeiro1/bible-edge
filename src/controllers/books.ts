import { makeGetBooksUseCase } from '@/use-cases/factories/make-get-books-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function getAllBooks(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const useCase = makeGetBooksUseCase()
  const { books } = await useCase.execute()
  return response.status(200).send({
    books,
  })
}
