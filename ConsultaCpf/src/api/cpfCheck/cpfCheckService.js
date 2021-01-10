const CpfCheck = require('./cpfCheck')
const errorHandler = require('../common/errorHandler.js')
const Customer = require('../customer/customer')

CpfCheck.methods(['get', 'post'])
CpfCheck.updateOptions({new: true, runValidators: true})
CpfCheck.after('post', errorHandler).after('put', errorHandler)

CpfCheck.before('post', async(req, res, next) => {
     let customer = await Customer.findOne({ cpf: req.body.cpf }).exec()

    let _new = new CpfCheck({
        origin: req.body.origin,
        customer: customer
    });
    await _new.save()

    res.json(_new);
})

module.exports = CpfCheck