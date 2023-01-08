const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = async(data) => {
  const emailContent = {...data, from: process.env.SENDGRID_EMAIL};

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
