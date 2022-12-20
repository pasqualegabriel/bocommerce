'use strict'

const schema = require('./schema')

const route = async (fastify, opts, next) => {
  const { sendCode } = require('./service')(fastify)
  fastify.get('/user/sendCode', { schema }, async (request, reply) => {
    const res = await sendCode(request.query)

    reply
      .type('application/json')
      .send(res)
  })
  next()
}

module.exports = route
