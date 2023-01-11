const { User } = require('../../../models')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const { email, password } = req.body
    
  try {
    const user = await User.findOne({email})
        
    if(!user || !user.verifyStatus || !user.comparePassword(password)) {
      res.status(403).json({ message: 'Email or password is wrong', code: 400, status: 'failure' })
    }
    else {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '24h'})
      res.json({ body: { token, user: { name: user.name, email, id: user._id }}, code: 200, status: 'success' })}
  } catch (err) {
      res.status(400).json({ message: err.message, code: 400, status: 'failure' })
  }
}

module.exports = login
