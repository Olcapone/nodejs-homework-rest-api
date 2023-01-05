const { Contact } = require('../../../models')

const deleteContact = async (req, res) => {
  const { contactId } = req.params
 
  await Contact.findByIdAndRemove(contactId)
    .then(data => {
      if(!data) { return res.status(404).json({ message: 'Not found', status: 'failure' }) }

      else {
        return res.status(200).json({  body: data, message: 'contact deleted', status: 'success'})
      }
    })    
}

module.exports = deleteContact
