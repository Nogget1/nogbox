let Aluno = require('./aluno');
let listaEstudantes = require('./estudantes/estudantes');

const curso = {
    nomeCurso: "DH",
    notaAprovacao: 7,
    faltaMaxima: 3,
    estudantes: listaEstudantes,
    resultadoFinal: array = [],


    addAluno: function (nome, qtdFaltas, notas) {
        curso.estudantes.push(new Aluno(nome, qtdFaltas, notas))
    },

    statusReprov: function (Aluno) {
        if (Aluno.mediaNotas() >= curso.notaAprovacao && Aluno.qtdFaltas < curso.faltaMaxima) {
            return true;
        }
        else if (Aluno.mediaNotas() >= (1.1 * curso.notaAprovacao) && Aluno.qtdFaltas == curso.faltaMaxima) {
            return true
        }
        else {
            return false
        }
    },

    listaResultados: function () {

        for (let i = 0; i < this.estudantes.length; i++) {
            this.estudantes[i]
            if (this.estudantes[i].mediaNotas() >= curso.notaAprovacao && this.estudantes[i].qtdFaltas < curso.faltaMaxima) {
                this.resultadoFinal.push(true)

            } else if (this.estudantes[i].mediaNotas() >= 1.1 * curso.notaAprovacao && this.estudantes[i].qtdFaltas == curso.faltaMaxima) {
                this.resultadoFinal.push(true)

            } else {
                this.resultadoFinal.push(false)
            }
        }

    },


};

// console.log(curso.estudantes);
// // console.log(curso)
// curso.listaResultados();
// console.log(curso.resultadoFinal);
// console.log(curso.statusReprov(curso.estudantes[1]));
// console.log(curso.estudantes[1].mediaNotas());


console.log("Execução do passo 1")
console.log(listaEstudantes[0]);

console.log("__")

console.log("Execução do passo 2")
listaEstudantes[0].falta();
console.log(listaEstudantes[0]);

console.log("__")

console.log("Execução do passo 3")
console.log(curso)

console.log("__")

console.log("Execução do passo 4")
console.log("Testando adicionar aluno")
curso.addAluno("Testando curso", 3, [7, 5, 9])
console.log(curso.estudantes)

console.log("__")

console.log("Execução do passo 5")
curso.statusReprov(listaEstudantes[0])

console.log("___")

console.log("Execução do passo 6")
curso.listaResultados()
console.log(curso.resultadoFinal);




