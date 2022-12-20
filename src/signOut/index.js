'use strict'

const schema = require('./schema')

const route = async (fastify, opts, next) => {
  const { signOut } = require('./service')(fastify)
  const { onRequest } = require('../login/sesion')(fastify)

  fastify.post('/user/invalidate/all/sessions', { onRequest, schema }, async (request, reply) => {
    const res = await signOut(request.user)

    reply
      .type('application/json')
      .send(res)
  })
  next()
}

module.exports = route
