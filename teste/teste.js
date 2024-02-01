let dados = [{
    nome: "João",
    idade: 16
},
{
    nome: 'Marcos',
    idade: 17
}]

for(let [chave, valor] of Object.entries(dados)){
    console.log({chave: chave, valor: valor})
}
