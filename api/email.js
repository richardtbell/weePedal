const express = require('express')
const nodemailer = require("nodemailer");
const config = require('../config')

const router = express.Router();
var ejs = require("ejs");
const transporterForms = config.transporterForms

router.post("/sendEmail", (req, res) => {
  const emailData ={
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  }
    ejs.renderFile(
      __dirname + "/email/views/websiteResponse.ejs",
      { emailData },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          var mailOptions = {
            from: config.mailFromWebsite,
            to: config.mailToWebsite,
            subject: "Contact Us enquiry from website",
            html: data
          };
          transporterForms.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              res.send(info);
            }
          });
        }
      }
    )
  });
  router.post("/sendAutoResponse", (req, res) => {
   
      ejs.renderFile(
        __dirname + "/email/views/autoResponse.ejs",
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            var mailOptions = {
              from: config.mailFromWebsite,
              to: req.body.email,
              subject: "Auto response from A Wee Pedal",
              html: data
            };
            transporterForms.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log(error);
              } else {
                res.send(info);
              }
            });
          }
        }
      )
    });

module.exports = router;