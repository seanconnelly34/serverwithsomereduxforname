// const nodemailer = require("nodemailer");
// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   secure: false,
//   port: 25,
//   auth: {
//     user: ',
//     pass: process.env.GMAIL_PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

//nodemailer issue on nginx server, use string for email password (special characters dont work in env vars)
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  name: process.env.SERVICE,
  host: process.env.HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER, // your email address to send email from
    pass: process.env.PASSWORD, // your gmail account password
  },
  tls: {
    rejectUnauthorized: false,
  },
});
module.exports = transporter;
