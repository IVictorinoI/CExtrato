const express = require('express')

module.exports = function (server) {

    const api = express.Router()
    server.use('/api', api)

    const Customer = require('../api/customer/customerService')
    Customer.register(api, '/customer')
}