const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const swaggerUI = require("swagger-ui-express")
require('dotenv').config()

const docs = require('./docs')
const authRouter = require('./routes/api/auth')
const userRouter = require('./routes/api/users')
const contactsRouter = require('./routes/api/contacts')

const app = express()
const PORT = process.env.PORT || 8081
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/contacts', contactsRouter)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs))

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res) => {
  res.status(500).json({ message: err.message })
})

module.exports = {app}
