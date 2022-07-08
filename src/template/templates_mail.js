const verifyTemplate = (email, verificationToken) => ({
  to: email,
  subject: 'Verification email',
  html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}">Verify your account</a>`
})

module.exports = {verifyTemplate}
