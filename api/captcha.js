const express = require('express')
const axios = require('axios')
const config = require('../config')

const router = express.Router();

router.post("/verifyCaptcha", (req, res) => {
    axios
      .post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${config.secretKey}&response=${
          req.body.response
        }`
      )
      .then(response => {
        res.send(response.data);
      })
      .catch(console.error);
  });

module.exports = router;