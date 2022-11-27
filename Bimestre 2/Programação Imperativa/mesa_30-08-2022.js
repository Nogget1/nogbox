// const conta = {
//     titular: 'Lucas Nogueira',
//     numero: 1235634,
//     tipo: 'Corrente',
//     saldo: 25000,

// }

//JSON

// const dados = [{
//     "titular": "Abigael Natte",
//     "numero": 5486273622,
//     "tipo": "Conta Corrente",
//     "saldo": 27771,
// },
// {
//     "titular": "Ramon Connell",
//     "numero": 1183971869,
//     "tipo": "Conta Poupança",
//     "saldo": 8675,
// },
// {
//     "titular": "Jarret Lafuente",
//     "numero": 9582019689,
//     "tipo": "Conta Poupança",
//     "saldo": 27363,
// },
// {
//     "titular": "Ansel Ardley",
//     "numero": 1761924656,
//     "tipo": "Conta Poupança",
//     "saldo": 32415,
// },
// {
//     "titular": "Jacki Shurmer",
//     "numero": 7401971607,
//     "tipo": "Conta Poupança",
//     "saldo": 18789,
// },
// {
//     "titular": "Jobi Mawtus",
//     "numero": 630841470,
//     "tipo": "Conta Corrente",
//     "saldo": 28776,
// },
// {
//     "titular": "Thomasin Latour",
//     "numero": 4223508636,
//     "tipo": "Conta Corrente",
//     "saldo": 2177,
// },
// {
//     "titular": "Lonnie Verheijden",
//     "numero": 185979521,
//     "tipo": "Conta Poupança",
//     "saldo": 25994,
// },
// {
//     "titular": "Alonso Wannan",
//     "numero": 3151956165,
//     "tipo": "Conta Corrente",
//     "saldo": 7601,
// },
// {
//     "titular": "Bendite Huggett",
//     "numero": 2138105881,
//     "tipo": "Conta Poupança",
//     "saldo": 33196,
// }


// ]

const clientes = require('./modulos/pessoasBanco');
console.log(clientes);

// console.log(dados[0]);

function Conta(titular, numero, tipo, saldo) {
    this.titular = titular;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
}

// let conta1 = new Conta(dados[0].titular, dados[0].numero, dados[0].tipo, dados[0].saldo);
// // console.log(conta1);

let listaContas = [];
for (let contador = 0; contador < dados.length; contador++) {
    listaContas.push(new Conta(dados[contador].titular, dados[contador].numero, dados[contador].tipo, dados[contador].saldo));

}

console.log(listaContas)