const express = require('express');
const routes = express.Router();

routes.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Seja Bem vindo!',
        rotas: ['/produtos', '/produtos/materiais_escolares']
    });
});

module.exports = routes