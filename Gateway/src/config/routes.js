const express = require('express')
const requestApi = require('../requestApi')

module.exports = function (server) {

    const api = express.Router()
    server.use('/api', api)

    const customerApi = 'http://localhost:3001/api/customer/'
    api.get('/customer', async(req, res) => {
        requestApi.send({ method: req.method, url: customerApi }, async (data) => res.json(data))
    })

    api.put('/customer/:cpf', async(req, res) => {
        requestApi.send({ method: req.method, url: customerApi+req.params.cpf }, async (data) => res.json(data))
    })       

    
    const cpfCheckApi = 'http://localhost:3002/api/cpfCheck/'
    api.get('/cpfCheck', async(req, res) => {
        requestApi.send({ method: req.method, url: cpfCheckApi+'?populate=customer' }, async (data) => res.json(data))
    })

    api.get('/cpfCheck/:id', async(req, res) => {
        requestApi.send({ method: req.method, url: cpfCheckApi+req.params.id }, async (data) => res.json(data))
    })    

    api.post('/cpfCheck', async(req, res) => {
        requestApi.send({ method: req.method, url: cpfCheckApi, body: req.body }, async (data) => res.json(data))
    })

    

    const movtoFinancApi = 'http://localhost:3003/api/movtoFinanc/'
    api.get('/movtoFinanc', async(req, res) => {
        requestApi.send({ method: req.method, url: movtoFinancApi+'?populate=customer' }, async (data) => res.json(data))
    })     

    api.post('/movtoFinanc', async(req, res) => {
        requestApi.send({ method: req.method, url: movtoFinancApi, body: req.body }, async (data) => res.json(data))
    })

    api.get('/movtoFinanc/:id', async(req, res) => {
        requestApi.send({ method: req.method, url: movtoFinancApi+req.params.id }, async (data) => res.json(data))
    })       

    api.delete('/movtoFinanc/:id', async(req, res) => {
        requestApi.send({ method: req.method, url: movtoFinancApi+req.params.id }, async (data) => res.json(data))
    })        
    



    const movtoCartaoApi = 'http://localhost:3004/api/movtoCartao/'
    api.get('/movtoCartao', async(req, res) => {
        requestApi.send({ method: req.method, url: movtoCartaoApi }, async (data) => res.json(data))
    })

    api.post('/movtoCartao', async(req, res) => {
        requestApi.send({ method: req.method, url: movtoCartaoApi, body: req.body }, async (data) => res.json(data))
    })

    api.get('/movtoCartao/:id', async(req, res) => {
        requestApi.send({ method: req.method, url: movtoCartaoApi+req.params.id }, async (data) => res.json(data))
    })       

    api.delete('/movtoCartao/:id', async(req, res) => {
        requestApi.send({ method: req.method, url: movtoCartaoApi+req.params.id }, async (data) => res.json(data))
    })         

}