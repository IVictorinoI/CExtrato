const port = process.env.PORT || 3000

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const queryParser = require('express-query-int')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(queryParser())
server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const httpServer = server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server