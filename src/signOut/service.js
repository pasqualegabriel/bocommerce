const moment = require('moment')

module.exports = (fastify) => {
  const { User } = fastify.db

  async function signOut(user) {
    try {
      await User.update({ invalidationDate: moment() }, { where: { id: user.id } })
      return {
        status: 'ok'
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    signOut
  }
}
