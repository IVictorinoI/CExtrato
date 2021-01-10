const request = require('request');

const send = async(options, next) => {

    options.json = true

    request(options, async (error, response, body) => {
        console.log(body)
        next(body) 
    });
}

module.exports = { send }