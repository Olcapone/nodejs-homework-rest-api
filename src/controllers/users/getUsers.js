const {  User } = require('../../../models')

const getUsers = async(req, res) => {

  const data = await User.aggregate(
    [
      {
        '$project': {
          '__v': 0, 
          'password': 0,
        }
      }, {
        '$lookup': {
          'from': 'contacts', 
          'localField': '_id',
          'foreignField': 'owner',
          'as': 'usersContacts'
        }
      }
    ]
  )

  res.json({
    body: data,
    status: 'success',
    code: 200
  })
}

module.exports = getUsers
