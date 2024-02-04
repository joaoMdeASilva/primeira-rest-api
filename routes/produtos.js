const express = require('express');
const routes = express.Router();
let dadosProdutos = []

// rota root
routes.get('/', (req, res, next) =>{
    res.send({
        mensagem: 'Seja bem vindo(a) a rota de produtos!',
        rota: '/protudos/protudo_estoque',
        query: [
            'nome_produto',
            'preco_produto',
        ]
    });
});

// visualizar produtos em estoque
routes.get('/protudo_estoque', (req, res, next) => {
    res.status(200).send({produtos: dadosProdutos});
})

// rota para adicionar novos produtos
routes.post('/', (req, res, next) => {
    const {id, nome_produto, preco_produto} = req.query
    
    dadosProdutos.push({
        id: id,
        nome: nome_produto,
        preco: preco_produto
    })
    
    res.status(200).send({
        mensagem: `Produto ${nome_produto} com preço de R$${preco_produto} foram adicionados.`,
        rota: 'Coloque a rota /produtos/protudo_estoque para ver os produtos!',
    })

})

// editar produto
routes.put('/editar_produto', (req, res, next)=>{
    const {id, nome_produto, preco_produto} = req.query
    const index = dadosProdutos.findIndex((dados)=> dados.id == id)

    nomeAnterior = dadosProdutos[index].nome

    dadosProdutos[index].nome = nome_produto
    dadosProdutos[index].preco = preco_produto
    
    res.status(201).send({
        mensagem: `Nome do produto ${nome_produto} e preco atual R$${preco_produto} ` 
    })
})


// rota de produtos de materiais escolares
routes.get('/materiais_escolares', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Rota de materias escolares.'
    });
});

module.exports = routes;