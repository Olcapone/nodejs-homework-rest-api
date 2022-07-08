// EXAMPLE

// const nodemailer = require('nodemailer');

// require('dotenv').config();

// const config = {
//   host: 'smtp.meta.ua',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'olcapone@meta.ua',
//     pass: process.env.META_PASSWORD,
//   },
// };

// const transporter = nodemailer.createTransport(config);
// const emailOptions = {
//   from: 'olcapone@meta.ua',
//   to: 'noresponse@gmail.com',
//   subject: 'Nodemailer test',
//   text: 'Привет. Мы тестируем отправку писем!',
// };

// transporter
//   .sendMail(emailOptions)
//   .then(info => console.log(info))
//   .catch(err => console.log(err))
