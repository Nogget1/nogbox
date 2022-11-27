



var Aluno = function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome
    this.qtdFaltas = qtdFaltas
    this.notas = notas

    this.mediaNotas = function () {
        let somaNotas = 0;

        for (let i = 0; i < this.notas.length; i++) {
            somaNotas += notas[i];
        };

        return somaNotas / this.notas.length;


    };

    this.falta = function () {
        this.qtdFaltas++;
    };

}



module.exports = Aluno

