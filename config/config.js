'use strict'
const pack = require('../package.json')
const variables = require('./variables')
const prefix = `/${pack.config.prefix}/v1`

const port = variables.port || 8100

const TWO_MONTHS = 60 * 60 * 24 * 30 * 2 // secs * min * hrs * days * months

const config = {
  prefix,
  port,
  pino: {
    level: 'info',
    timestamp: () => ',"time":"' + (new Date()).toISOString() + '"'
  },
  jwt: {
    secret: variables.JWT_SECRET || 'secret',
    exp: TWO_MONTHS,
    sign: {
      expiresIn: TWO_MONTHS
    }
  },
  schemes: ['https']
}

module.exports = config
