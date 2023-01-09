const verifyTemplate = (userName, email, verificationCode) => ({
  to: email,
  subject: 'Verification email',
  text: `Dear ${userName}`,
  html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationCode}">Verify your account</a>`
})

module.exports = {verifyTemplate}
