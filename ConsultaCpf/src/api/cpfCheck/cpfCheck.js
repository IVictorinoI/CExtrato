const restful = require('node-restful')
const mongoose = restful.mongoose

const cpfCheckSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now, required: true },
    origin: { type: String, required: true },
    
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    }    
})

module.exports = restful.model('CpfCheck', cpfCheckSchema)