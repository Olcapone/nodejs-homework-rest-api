const express = require('express')
const router = express.Router()
const {contacts: ctrl} = require('../../src/controllers')
const {validation, auth} = require('../../src/middlewares')

const {
  addContactJoiSchema,
  updateContactJoiSchema,
  updateContactStatusJoiSchema
} = require('../../models/contactSchema')

router.get('/', auth, ctrl.getAll)

//router.get('/:contactId', ctrl.getContact)

router.post('/', auth, validation(addContactJoiSchema), ctrl.addContact)

router.put('/:contactId', auth, validation(updateContactJoiSchema), ctrl.updateContact)

router.patch('/:contactId/favorite', auth, validation(updateContactStatusJoiSchema), ctrl.updateStatus)

router.delete('/:contactId', auth, ctrl.deleteContact)

module.exports = router
