const https = require('https')

const getFromPeopleSystem = async (cpf, next) => {

    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InN0cmluZyIsInJvbGUiOiJEZWZhdWx0Um9sZSIsIklkIjoiMSIsIm5iZiI6MTYxMDMwNjU5MiwiZXhwIjoxNjEyODk4NTkyLCJpYXQiOjE2MTAzMDY1OTJ9.UzZjg4e924sYkVBdouc7NSsBUscbXIoPIidTY5m2uN8'
    const apiUrl = 'https://localhost:44373/api/'

    https.globalAgent.options.rejectUnauthorized = false

    https.request({
      method: 'GET',
      path: `${apiUrl}v1/customers/byCpf/${cpf}`,
      port: '44373',
      headers: { 'authorization': token }
    }, async (response) => {
      var str = '';
      response.on('data', async (chunk) => str += chunk );      
      response.on('end', async () => next(JSON.parse(str)));
    }).end();  
}

module.exports = { getFromPeopleSystem }