const express = require('express')
const {auth: ctrl} = require('../../src/controllers')
const {auth, validation} = require('../../src/middlewares')
const {
  joiRegisterSchema,
  joiLoginSchema,
  reVerifyMailJoiSchema
} = require('../../models/authSchema')

const router = express.Router()

router.post('/signup', validation(joiRegisterSchema), ctrl.register)

router.post('/login', validation(joiLoginSchema), ctrl.login)

router.get('/verify/:verificationToken', ctrl.verifyEmail)

router.post('/verify', validation(reVerifyMailJoiSchema), ctrl.resendVerifyEmail)

router.get('/logout', auth, ctrl.logout)

module.exports = router
