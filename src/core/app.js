'use strict'
const config = require('../../config/config')
const { logger, ...utils } = require('../utils')
const fastify = require('fastify')({
  requestIdHeader: 'x-request-id',
  logger: { ...logger, ...config.pino }
})

async function app() {
  // await fastify.register(require('middie'))
  // fastify.use(utils.cors)
  fastify.addHook('onRequest', utils.corsHook)
  fastify.decorate('config', config)
  fastify.setErrorHandler(utils.errorHandler)

  utils.jwt(fastify)
  utils.request(fastify)
  utils.requestJSON(fastify)

  fastify.register(require('../ping'), { prefix: fastify.config.prefix })

  fastify.ready(err => {
    if (err) throw err
  })

  return fastify
}

module.exports = {
  app,
  logger: fastify.log
}
