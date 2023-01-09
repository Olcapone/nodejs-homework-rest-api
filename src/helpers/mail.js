const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY_5)

const sendEmail = async(data) => {
  const emailContent = {...data, from: process.env.SENDGRID_EMAIL_5};

  console.log(emailContent)

  try {
     await sgMail.send(emailContent).then(() => {
       console.log("mail is send");
     })
    return true
  } catch (err) {
      console.error(err)
  }
}

module.exports = sendEmail
