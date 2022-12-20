'use strict'

const { ADMIN } = require('../constants/user')
const schema = require('./schema')

const route = async (fastify, opts, next) => {
  const { products } = require('./service')(fastify)
  const onRequest = async req => {
    const decoded = await req.jwtVerify()
    if(decoded.role !== ADMIN) throw new Error('error')
    req.jwt = decoded
  }
  fastify.get('/admin/products/all', { onRequest, schema }, async (request, reply) => {
    const res = await products(request.query)

    return reply
      .type('application/json')
      .send(res)
  })
  next()
}

module.exports = route
