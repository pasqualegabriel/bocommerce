'use strict'
const config = require('../../config/config')
const { app, logger } = require('./app')

async function start() {
  try {
    const fastify = await app()
    await fastify.listen({ port: config.port, host: 'localhost' })
  } catch (err) {
    logger.error(err)
    process.exit(1)
  }
}

start()
