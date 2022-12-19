'use strict'

const { ADMIN } = require('../constants/user')
const schema = require('./schema')

const route = async (fastify, opts, next) => {
  const { products } = require('./service')(fastify)
  const onRequest = async (req, reply, done) => {
    const decoded = await req.jwtVerify()
    if(decoded.role !== ADMIN) throw new Error('error')
    req.jwt = decoded
    return done()
  }
  fastify.get('/admin/products/all', { onRequest, schema }, async (request, reply) => {
    const res = await products(request.query)

    reply
      .type('application/json')
      .send(res)
  })
  next()
}

module.exports = route
