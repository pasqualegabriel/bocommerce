'use strict'

const schema = require('./schema')

const route = async (fastify, opts, next) => {
  const { signIn } = require('./service')(fastify)
  fastify.post('/user/signIn', { schema }, async (request, reply) => {
    const res = await signIn(request.body)

    reply
      .type('application/json')
      .send(res)
  })
  next()
}

module.exports = route
