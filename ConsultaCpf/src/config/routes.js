const express = require('express')

module.exports = function (server) {

    const api = express.Router()
    server.use('/api', api)

    const CpfCheck = require('../api/cpfCheck/cpfCheckService')
    CpfCheck.register(api, '/cpfCheck')
}