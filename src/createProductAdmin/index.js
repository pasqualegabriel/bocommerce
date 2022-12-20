'use strict'

const { ADMIN } = require('../constants/user')
const schema = require('./schema')

const route = async (fastify, opts, next) => {
  const { createProduct } = require('./service')(fastify)
  const onRequest = async (req, reply, done) => {
    const decoded = await req.jwtVerify()
    if(decoded.role !== ADMIN) throw new Error('error')
    req.jwt = decoded
  }
  fastify.post('/admin/product/create', { onRequest, schema }, async (request, reply) => {
    const res = await createProduct(request.body)

    reply
      .type('application/json')
      .send(res)
  })
  next()
}

module.exports = route
