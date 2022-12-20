'use strict'
const config = require('../../config/config')
const models = require('../models')
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
  fastify.decorate('db', models)
  fastify.setErrorHandler(utils.errorHandler)

  utils.jwt(fastify)
  utils.openAPI(fastify)
  utils.request(fastify)
  utils.requestJSON(fastify)

  fastify.register(require('../ping'), { prefix: fastify.config.prefix })
  fastify.register(require('../products'), { prefix: fastify.config.prefix })
  fastify.register(require('../productsAdmin'), { prefix: fastify.config.prefix })
  fastify.register(require('../createProductAdmin'), { prefix: fastify.config.prefix })
  fastify.register(require('../signIn'), { prefix: fastify.config.prefix })
  fastify.register(require('../sendCode'), { prefix: fastify.config.prefix })
  fastify.register(require('../signOut'), { prefix: fastify.config.prefix })

  fastify.ready(err => {
    if (err) throw err
  })

  return fastify
}

module.exports = {
  app,
  logger: fastify.log
}
