const {Schema, model} = require('mongoose')
const Joi = require('joi')
const bcrypt = require('bcryptjs')

const { subscriptionType } = require('./constants')

const userSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    min: [6, 'Password must has min 6 symbol'],
    required: [true, 'Password is required'],
  },
  avatarURL: {
    type: String,
    required: true
  },
  subscription: {
    type: String,
    enum: subscriptionType,
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
  verifyStatus: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    required: [true, 'Verify token is required'],
  }
}, { versionKey: false, timestamps: true })

userSchema.methods.setPassword = function(password){
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

const User = model('user', userSchema)

const joiSignUpSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(100),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string()
    .min(6)
    .max(100)
    .required(),
})

const joiLoginSchema = Joi.object().keys({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string()
    .min(6)
    .max(100)
    .required()
})

const updateContactStatusJoiSchema = Joi.object().keys({
  favorite: Joi.boolean().required()
})

const updateSubscriptionJoiSchema = Joi.object().keys({
  subscription: Joi.string().valid(...subscriptionType).required()
})

const reVerifyMailJoiSchema = Joi.object().keys({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
})

module.exports = {
  User,
  joiSignUpSchema,
  joiLoginSchema,
  updateContactStatusJoiSchema,
  updateSubscriptionJoiSchema,
  reVerifyMailJoiSchema
}
