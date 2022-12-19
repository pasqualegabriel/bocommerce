'use strict'

function errorHandler(error, request, reply) {
  request.log.error(error)

  reply.send(error.err || error)
}

module.exports = errorHandler
