const { Contact } = require('../../../models')

const getContact = async (req, res) => {
  const { contactId } = req.params

  await Contact.findById(contactId)
    .then(data => res.status(200).json({ contacts: data, code: 200, status: 'success' }))
    .catch(_ => res.status(404).json({ message: `Contact with id=${contactId} not found`, code: 404, status: 'failure' }))
}

module.exports = getContact
