const nodemailer = require('nodemailer')
const { mail: { user, pass } } = require('../../config/variables')

const sendEmail = ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass
    }
  })
  const mailOptions = {
    from: user,
    to,
    subject,
    text
  }
  return new Promise((resolve, reject) =>
    transporter.sendMail(mailOptions, (error, info) => (error ? reject(error) : resolve(info)))
  )
}

exports.sendCodeEmail = (email, code) => {
  const mail = {
    to: email,
    subject: '[BOCOMMERCE] Iniciar Sesion',
    text: `
    Codigo de acceso: ${code}

    Saludos! `
  }
  return sendEmail(mail)
}
