const MovtoFinanc = require('./movtoFinanc')
const errorHandler = require('../common/errorHandler.js')
const Customer = require('../customer/customer')

MovtoFinanc.methods(['get', 'post', 'delete'])
MovtoFinanc.updateOptions({new: true, runValidators: true})
MovtoFinanc.after('post', errorHandler)

MovtoFinanc.before('post', async(req, res, next) => {
     let customer = await Customer.findOne({ cpf: req.body.cpf }).exec()

    let _new = new MovtoFinanc({
        type: req.body.type,
        inOrOut: req.body.inOrOut,
        value: req.body.value,
        origin: req.body.origin,
        customer: customer
    });
    await _new.save()

    res.json(_new);
})

module.exports = MovtoFinanc