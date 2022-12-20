// const { sendCodeEmail } = require('../utils/mail')

module.exports = (fastify) => {
  async function sendCode({ email }) {
    try {
      const [user] = await fastify.db.User.findOrCreate({
        where: { email },
        defaults: {
          email
        }
      })
      const code = Math.random().toString(36).substring(2, 7).toLowerCase()
      user.code = code
      await user.save()
      // await sendCodeEmail(email, code)
      return {
        status: code
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    sendCode
  }
}
