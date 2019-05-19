require('dotenv').config({path:'variables.env'})

const config = {
    port: process.env.PORT,
    host: process.env.HOST
}

module.exports = config;