const { Contact, User} = require('../../../models')
const {parseToken} = require("../../helpers");

const getContacts = async (req, res) => {
  const {page = 1, limit = 20, favorite, sortBy = 'name', sortRule = 1} = req.query
  const skip = (page - 1)* limit
  const {id, bearer} = parseToken(req.headers)

  const queryObject = favorite ? { favorite: favorite } : {}

  console.log(id)

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
  ).then(res => {
   // console.log(res)
    //return res.find(el => token === el.token)
  });

 // const data = await Contact.find(queryObject, '-__v', {skip, limit: Number(limit)}).sort({[sortBy]: sortRule})
  return res.json({ body: data ? data.usersContacts : [], status: 'success', code: 200 })
}

module.exports = getContacts
