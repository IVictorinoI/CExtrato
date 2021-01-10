const restful = require('node-restful')
const mongoose = restful.mongoose

const movtoFinancSchema = new mongoose.Schema({
    type: { type: String, required: true, uppercase: true, default: 'PAY', enum: ['TRANSFER', 'PAY', 'RECEIVE', 'DONATE'] },
    inOrOut: { type: String, required: true, uppercase: true, default: 'OUT', enum: ['IN', 'OUT'] },
    date: { type: Date, default: Date.now, required: true },
    value: { type: Number, min: 0, required: true },
    origin: { type: String, required: true },

    
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    }    
})

module.exports = restful.model('MovtoFinanc', movtoFinancSchema)