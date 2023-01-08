const contacts = require('./contacts/contacts');
const contact = require('./contacts/contact');
const contactStatus = require('./contacts/contactStatus');
const users = require('./users/all');
const user = require('./users/current');
const userAvatar = require('./users/avatar');
const userSubscription = require('./users/subscription');
const sign = require('./auth/sign');
const login = require('./auth/login');
const verifyEmail = require('./auth/resendVerifyEmail');
const verificationCode = require('./auth/verifyEmail');
const logout = require('./auth/logout');

module.exports = {
  paths:{
    '/api/contacts':{
      ...contacts,
    },
    '/api/contacts/{id}':{
      ...contact,
    },
    '/api/contacts/{id}/favorite':{
      ...contactStatus,
    },
    '/api/users/all':{
      ...users,
    },
    '/api/users/current':{
      ...user,
    },
    '/api/users/avatars':{
      ...userAvatar,
    },
    '/api/users':{
      ...userSubscription,
    },
    '/api/auth/signup':{
      ...sign,
    },
    '/api/auth/login':{
      ...login,
    },
    '/api/auth/verify':{
      ...verifyEmail,
    },
    '/api/auth/verify/{verificationCode}':{
      ...verificationCode,
    },
    '/api/auth/logout':{
      ...logout,
    },
  }
}
