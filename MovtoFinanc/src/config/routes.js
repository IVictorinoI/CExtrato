const express = require('express')

module.exports = function (server) {

    const api = express.Router()
    server.use('/api', api)

    const MovtoFinanc = require('../api/movtoFinanc/movtoFinancService')
    MovtoFinanc.register(api, '/movtoFinanc')
}