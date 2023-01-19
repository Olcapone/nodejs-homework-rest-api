const express = require('express')
const { users: ctrl } = require('../../src/controllers')
const { validation, auth, upload } = require('../../src/middlewares')
const { updateContactStatusJoiSchema } = require('../../models/contactSchema')
const { db } = require("../../firebase")

const router = express.Router()
router.post('/test-add', async (req, res) => {
  const { name, status } = req.body
  const result = await db.collection('db').doc('users').set({
    [name]: status
  }, { merge: true })

  res.status(200).send(result)
})

router.get('/current', auth, ctrl.getCurrent)

router.get('/all', auth, ctrl.getUsers)

router.patch('/avatars', auth, upload.single('avatar'), ctrl.uploadAvatar)

router.patch('/', auth, validation(updateContactStatusJoiSchema), ctrl.updateSubscription)

module.exports = router
