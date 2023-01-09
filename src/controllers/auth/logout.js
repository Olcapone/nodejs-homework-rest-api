const { User } = require('../../../models')

const logout = async(req, res) => {
  const {id} = req.body;
  console.log(req.body);

  await User.findByIdAndUpdate(id, {token: null})
  .then(_ => res.json({}))
}

module.exports = logout
