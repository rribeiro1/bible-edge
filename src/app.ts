import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './utils/env'
import { bibleRoutes } from './controllers/routes'

export const app = fastify()

app.register(bibleRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error',
      issues: error.format(),
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(500).send({
    message: 'Internal server error',
  })
})
