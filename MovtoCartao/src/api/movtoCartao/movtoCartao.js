const restful = require('node-restful')
const mongoose = restful.mongoose

const movtoCartaoItemSchema = new mongoose.Schema({
    description: { type: String, required: true},
    value: { type: Number, min: 0, required: true },
})


const movtoCartaoSchema = new mongoose.Schema({
    credDeb: { type: String, required: true, uppercase: true, default: 'CRED', enum: ['CRED', 'DEB'] },
    date: { type: Date, default: Date.now, required: true },
    value: { type: Number, min: 0, required: true },
    origin: { type: String, required: true },
    
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },

    itens: [movtoCartaoItemSchema]
})

module.exports = restful.model('MovtoCartao', movtoCartaoSchema)