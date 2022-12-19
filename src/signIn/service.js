const moment = require('moment')
// const { compare: bcryptCompare } = require('bcryptjs')

module.exports = (fastify) => {
  async function signIn({ email, code }) {
    try {
      const user = await fastify.db.User.findOne({
        where: { email, code },
        raw: true
      })
      if(!user) throw new Error('error')
      // const samePassword = await bcryptCompare(password, user.password)
      // if(!samePassword) throw new Error('error')
      const userJwt = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        lastSignInDate: moment()
      }
      const jwt = fastify.jwt.sign(userJwt)
      return {
        jwt
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    signIn,
  }
}
