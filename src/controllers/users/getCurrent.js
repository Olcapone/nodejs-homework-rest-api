
const getCurrent = async(req, res) => {
  const {_id, name, email, subscription} = req.user

  res.json({
    body: { id: _id, name, email, subscription},
    status: 'success',
    code: 200
  })
}

module.exports = getCurrent
