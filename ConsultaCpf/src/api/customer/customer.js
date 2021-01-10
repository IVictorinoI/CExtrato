const restful = require('node-restful')
const mongoose = restful.mongoose

const customerSchema = new mongoose.Schema({    
    name: { type: String, required: true },
    cpf: { type: String, required: true },
})

module.exports = restful.model('Customer', customerSchema)