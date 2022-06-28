const express = require('express')
const {users: ctrl} = require('../../src/controllers')
const {validation, auth} = require('../../src/middlewares')
const {updateContactStatusJoiSchema} = require('../../models/contactSchema')

const router = express.Router()

router.get('/current', auth, ctrl.getCurrent)

router.patch('/', auth, validation(updateContactStatusJoiSchema), ctrl.updateSubscription)

module.exports = router
