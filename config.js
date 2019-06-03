require('dotenv').config({path:'variables.env'})
const nodemailer = require('nodemailer');

const config = {
    port: process.env.PORT,
    host: process.env.HOST,
    secretKey: process.env.googleSecretKey,
    transporterForms: nodemailer.createTransport({
        host: process.env.transporterHOST,
        port: process.env.transporterPORT,
        secure: process.env.secure, // true for 465, false for other ports
        auth: {
          user: process.env.transporterFormsUser, // generated ethereal user
          pass: process.env.transporterFormsPassword // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }
      }),
    mailFromWebsite: process.env.websiteEmailAccount,
    mailToWebsite:  process.env.websiteEmailAccount,
}

module.exports = config;