const axios = require("axios")

const httpServiceDatabase = axios.create({
    baseURL: process.env.DATABASE_HOST,
})

module.exports = { httpServiceDatabase }