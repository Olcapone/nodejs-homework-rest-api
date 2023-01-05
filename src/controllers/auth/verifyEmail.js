const { NotFound } = require('http-errors')
const { User } = require('../../../models')


const verifyEmail = async(req, res) => {
  const {verificationCode} = req.params

  const user = await User.findOne({verificationCode})

  if(!user) {
    res.status(404).json({message: 'User not found'})
    throw NotFound()
  }
  await User.findByIdAndUpdate(user._id, {verify: true, verificationCode})
  res.status(200).json({message: 'Verification successful'})
}

module.exports = verifyEmail
