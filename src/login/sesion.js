const moment = require('moment')
const { invalidationTimeInMinutes } = require('../constants/user')

module.exports = (fastify) => {
  const { User } = fastify.db

  const onRequest = async req => {
    const decoded = await req.jwtVerify()
    const user = await User.findOne({ where: { email: decoded.email }, raw: true })
    const userValidation = !user
    const jwtValidation = !decoded
    const invalidationTime = moment(decoded.lastSignInDate)
    const invalidationDate = moment(user.invalidationDate)
    invalidationTime.add(invalidationTimeInMinutes, 'minutes')
    const expirationValidation = invalidationTime > moment() && invalidationTime > invalidationDate
    if(userValidation || jwtValidation || !expirationValidation) throw new Error('error')
    req.jwt = decoded
    req.user = user
  }

  return {
    onRequest
  }
}
