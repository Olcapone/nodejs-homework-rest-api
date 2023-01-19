const jwt = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')
const { User } = require('../../models')

const auth = async(req, res, next) => {
  const {authorization = ''} = req.headers
  const [bearer, token] = authorization.split(' ')

    try {
      if(bearer !== 'Bearer') {
        res.status(401).json({ message: 'Invalid token', code: 401, status: 'failure' })
      }
      const {id} = jwt.verify(token, process.env.SECRET_KEY, function(err) {
        if (err) throw new Unauthorized('Not authorized')
        next()
      });

      await User.findById(id)
        .then(data => {
          if(!data) {
            throw new Unauthorized('Not found user')
          }
          req.user = data
          next()
        })

    } catch (err) {
      if(err.message === 'Invalid signature') {
        err.status = 401
        throw err
      }
      next(err)
  }
}

module.exports = auth
