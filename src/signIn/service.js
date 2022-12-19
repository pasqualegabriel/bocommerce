const moment = require('moment')
const { compare: bcryptCompare } = require('bcryptjs')

module.exports = (fastify) => {
  async function signIn({ email, password }) {
    try {
      const user = fastify.db.User.findOne({
        where: { email },
        raw: true
      })
      const samePassword = await bcryptCompare(password, user.password)
      if(!samePassword) throw new Error('error')
      const userJwt = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        lastSignInDate: moment()
      }
      const token = fastify.jwt.sign(userJwt, fastify.config.jwt.secret)
      return {
        token
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    signIn,
  }
}
