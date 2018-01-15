
const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders: ['*', 'x-access-token'],
  exposeHeaders: ['*']
})

module.exports = cors
