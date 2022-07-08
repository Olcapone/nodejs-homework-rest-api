const { NotFound } = require('http-errors')

const { User } = require('../../../models')
const { sendEmail } = require('../../helpers')
const { verifyTemplate } = require('../../template')


const resendVerifyEmail = async(req, res, next) => {
  const { email, verificationToken } = req.body

  const user = await User.findOne({verificationToken})

  if(!user) {
    res.status(404).json({message: 'User not found'})
    throw NotFound()
  }

  else if(user.verify) {
    res.status(400).json({message: 'Verification has already been passed'})
  }

  const verifyMessage = verifyTemplate(email, verificationToken)
  await sendEmail(verifyMessage)

  res.status(201).json({message: 'Verification message was sent'})
}

module.exports = resendVerifyEmail
