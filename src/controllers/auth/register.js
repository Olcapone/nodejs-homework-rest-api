const { Conflict } = require('http-errors')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const {v4} = require('uuid')

const { User } = require('../../../models')
const { sendEmail } = require('../../helpers')
const { verifyTemplate } = require('../../template')

const register = async (req, res) => {
  const { name, email, password, avatar } = req.body
 
  const user = await User.findOne({email})

    if(user) {
      res.status(409).json({ message: 'Email in use', code: 409, status: 'failure' })
      throw new Conflict()
    }

    else if(!password || password.length < 6) {
      res.status(400).json({ message: 'Password must has min 6 symbol' })
    }

    else {
      const verificationCode = v4()
      const defaultUrl = gravatar.url(email)
      const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
      const newUser = {
        name,
        email,
        verificationCode,
        avatarURL: avatar || defaultUrl,
        password: hashPassword,
      }

      await User.create(newUser)
        .then(() => res.status(201)
          .json({
              message: `Authorization was successful: ${name}`,
              code: 201,
              status: 'success',
          })
        )
        .catch(err => res.status(400).json({ message: err.message, code: 400, status: 'failure' }))
        
      const verifyMessage = verifyTemplate(name, email, verificationCode)
      await sendEmail(verifyMessage)

      //TODO delete when sengrid will fix

      const user = await User.findOne({verificationCode})
      await User.findByIdAndUpdate(user._id, {verifyStatus: true, verificationCode})
    }
}

module.exports = register
