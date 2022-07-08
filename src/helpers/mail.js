const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_KEY)

const sendEmail = async(data) => {
  const email = {...data, from: process.env.SENDGRID_EMAIL}
  try {
    await sgMail.send(email)
    return true
  } catch (err) {
      console.error(err)
  }
}

module.exports = sendEmail
