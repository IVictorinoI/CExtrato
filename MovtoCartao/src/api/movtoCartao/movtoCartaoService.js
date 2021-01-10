const MovtoCartao = require('./movtoCartao')
const errorHandler = require('../common/errorHandler.js')
const Customer = require('../customer/customer')

MovtoCartao.methods(['get', 'post', 'delete'])
MovtoCartao.updateOptions({new: true, runValidators: true})
MovtoCartao.after('post', errorHandler)

MovtoCartao.before('post', async(req, res, next) => {
     let customer = await Customer.findOne({ cpf: req.body.cpf }).exec()

    let _new = new MovtoCartao({
        credDeb: req.body.credDeb,
        value: req.body.value,
        origin: req.body.origin,
        customer: customer,

        itens: req.body.itens
    });
    await _new.save()

    res.json(_new);
})

module.exports = MovtoCartao