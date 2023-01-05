
const getCurrent = async(req, res) => {
  const {email, subscription} = req.user

  res.json({
    body: { email, subscription },
    status: 'success',
    code: 200
  })
}

module.exports = getCurrent
