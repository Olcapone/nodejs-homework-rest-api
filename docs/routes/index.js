const contacts = require('./contacts/contacts');
const contact = require('./contacts/contact');
const contactStatus = require('./contacts/contact-status');
const users = require('./users/all');
const user = require('./users/current');
const userAvatar = require('./users/avatar');
const userSubscription = require('./users/subscription');
const sign = require('./auth/sign');
const login = require('./auth/login');
const verify = require('./auth/verify');
const verificationToken = require('./auth/verificationToken');
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
    '/api/users/':{
      ...userSubscription,
    },
    '/api/auth/signup':{
      ...sign,
    },
    '/api/auth/login':{
      ...login,
    },
    '/api/auth/verify':{
      ...verify,
    },
    '/api/auth/verify/{verificationToken}':{
      ...verificationToken,
    },
    '/api/auth/logout':{
      ...logout,
    },
  }
}