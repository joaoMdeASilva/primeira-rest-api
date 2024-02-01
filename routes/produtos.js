const express = require('express');
const routes = express.Router();

// rota root
routes.get('/', (req, res, next) =>{
    res.send({
        mensagem: 'Seja bem vindo(a) a rota de produtos!'
    });
});

// rota de produtos de materiais escolares
routes.get('/materiais_escolares', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Rota de materias escolares.'
    });
});

module.exports = routes;