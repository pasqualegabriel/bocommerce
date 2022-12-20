'use strict'

const schema = require('./schema')

const route = async (fastify, opts, next) => {
  const { createProduct } = require('./service')(fastify)
  const { onRequest } = require('../login/admin')(fastify)

  fastify.post('/admin/product/create', { onRequest, schema }, async (request, reply) => {
    const res = await createProduct(request.body)

    reply
      .type('application/json')
      .send(res)
  })
  next()
}

module.exports = route
