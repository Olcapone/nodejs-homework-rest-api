const { NotFound } = require('http-errors')

const { User } = require('../../../models')
const { sendEmail } = require('../../helpers')
const { verifyTemplate } = require('../../template')


const resendVerifyEmail = async(req, res) => {
  const { email, verificationCode } = req.body

  const user = await User.findOne({verificationCode})

  if(!user) {
    res.status(404).json({message: 'User not found'})
    throw NotFound()
  }

  else if(user.verifyStatus) {
    res.status(400).json({message: 'Verification has already been passed'})
  }

  const verifyMessage = verifyTemplate(email, verificationCode)
  await sendEmail(verifyMessage)

  res.status(201).json({message: 'Verification message was sent'})
}

module.exports = resendVerifyEmail
