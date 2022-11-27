const Aluno = require('../aluno');

let listaEstudantes = [];

const aluno1 = new Aluno('Lucas', 2, [8, 2, 1]);
const aluno2 = new Aluno('Cadu', 0, [9, 10, 7]);

listaEstudantes.push(aluno1, aluno2)

// console.log(listaEstudantes)

module.exports = listaEstudantes



