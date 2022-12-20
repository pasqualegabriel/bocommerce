'use strict'

const schema = require('./schema')

const route = async (fastify, opts, next) => {
  const { products } = require('./service')(fastify)
  const { onRequest } = require('../login/admin')(fastify)

  fastify.get('/admin/products/all', { onRequest, schema }, async (request, reply) => {
    const res = await products(request.query)

    return reply
      .type('application/json')
      .send(res)
  })
  next()
}

module.exports = route
