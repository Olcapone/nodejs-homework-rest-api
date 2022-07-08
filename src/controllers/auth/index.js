const register = require('./register')
const login = require('./login')
const verifyEmail = require('./verifyEmail')
const resendVerifyEmail = require('./resendVerifyEmail')
const logout = require('./logout')

module.exports = {
  register,
  login,
  verifyEmail,
  resendVerifyEmail,
  logout
}
