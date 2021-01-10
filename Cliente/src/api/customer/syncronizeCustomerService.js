const https = require('https')

const getFromPeopleSystem = (cpf, next) => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlZpY3RvciIsInJvbGUiOiJEZWZhdWx0Um9sZSIsIklkIjoiNCIsIm5iZiI6MTYxMDIxMzA3MywiZXhwIjoxNjEwMzg1ODczLCJpYXQiOjE2MTAyMTMwNzN9.61BFRLwk5aE2E5-rU1GG9eow4S-sYzSJzWacE0iyRiI'
    const apiUrl = 'https://localhost:44373/api/'

    https.globalAgent.options.rejectUnauthorized = false

    var options = {
        method: 'GET',
        path: `${apiUrl}v1/customers/byCpf/${cpf}`,
        port: '44373',
        headers: {'authorization': token}        
    }

    callback = function(response) {
        var str = '';

        response.on('data', function (chunk) {
          str += chunk;
        });
      
        response.on('end', function () {
          next(JSON.parse(str));
        });
    }

    https.request(options, callback).end();  
}

module.exports = { getFromPeopleSystem }