const signUp = require('./signUp')
const login = require('./login')
const verifyEmail = require('./verifyEmail')
const resendVerifyEmail = require('./resendVerifyEmail')
const logout = require('./logout')

module.exports = {
  signUp,
  login,
  verifyEmail,
  resendVerifyEmail,
  logout
}
