'use strict'

const schema = require('./schema')

const route = async (fastify, opts, next) => {
  const { products } = require('./service')(fastify)
  fastify.get('/products/all', { schema }, async (request, reply) => {
    const res = await products(request.query)

    return reply
      .type('application/json')
      .send(res)
  })
  next()
}

module.exports = route
