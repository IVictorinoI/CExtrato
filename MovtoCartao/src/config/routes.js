const express = require('express')

module.exports = function (server) {

    const api = express.Router()
    server.use('/api', api)

    const MovtoCartao = require('../api/movtoCartao/movtoCartaoService')
    MovtoCartao.register(api, '/movtoCartao')
}