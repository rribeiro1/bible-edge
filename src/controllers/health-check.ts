import { FastifyReply, FastifyRequest } from 'fastify'

export async function healthCheck(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  return reply.status(200).send({
    status: 'ok',
    message: 'Welcome to the Bible API',
    version: process.env.npm_package_version,
    environment: process.env.NODE_ENV,
    uptime: `${process.uptime().toFixed(0)}s`,
    timestamp: new Date().toISOString(),
  })
}
