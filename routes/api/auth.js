const express = require('express')
const {auth: ctrl} = require('../../src/controllers')
const {validation} = require('../../src/middlewares')
const {
  joiRegisterSchema,
  joiLoginSchema,
  reVerifyMailJoiSchema
} = require('../../models/authSchema')

const router = express.Router()

router.post('/signup', validation(joiRegisterSchema), ctrl.register)

router.post('/login', validation(joiLoginSchema), ctrl.login)

router.get('/verify/:verificationCode', ctrl.verifyEmail)

router.post('/verify', validation(reVerifyMailJoiSchema), ctrl.resendVerifyEmail)

router.post('/logout', ctrl.logout)

module.exports = router
