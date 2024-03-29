const express = require('express');
const app = express();
const produtos = require('./routes/produtos');
const princial = require('./routes/princiapl');

app.use(express.json())
app.use('/', princial);
app.use('/produtos',  produtos)

app.use((req,res,next) => {
    const erro = new Error('Não encontrado')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {mensagem: error.message}
    })
})


module.exports = app;