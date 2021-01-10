const Customer = require('./customer')
const errorHandler = require('../common/errorHandler.js')
const syncronizeCustomerService = require('./syncronizeCustomerService')

Customer.methods(['get', 'put'])
Customer.updateOptions({new: true, runValidators: true})
Customer.after('put', errorHandler)

Customer.before('get', async(req, res, next) => {
    if(req.query.cpf){
        const customer = await Customer.findOne({ "cpf": { $regex: '.*' + req.query.cpf + '.*' } });
        var zx = req.params.cpf;
        res.json(customer._doc);
        return;
    }

    next();
});

Customer.before('put', async(req, res, next) => {

    syncronizeCustomerService.getFromPeopleSystem(req.params.id, function(lista){
        if(!lista || !lista.length){
            res.json(lista);
            return;
        }

        lista.forEach(function(dto){
            insertOrUpdateCustomer(dto);
        });
        
        res.json(lista);
    });
})

const insertOrUpdateCustomer = (dto) => {
    Customer.update({cpf: dto.cpf}, {
        name: dto.name,
        cpf: dto.cpf
    }, {
        upsert: true
    }).exec();
}


module.exports = Customer