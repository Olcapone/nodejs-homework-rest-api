
const getCurrent = async(req, res) => {
  const {name, email, subscription} = req.user

  res.json({
    body: { name, email, subscription },
    status: 'success',
    code: 200
  })
}

module.exports = getCurrent
