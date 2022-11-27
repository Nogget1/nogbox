//Minha segunda aplicacão 2

let Avaliacao = require('./Avaliacao');
let espectadores = require('./Espectadores');

espectadores.push(new Avaliacao(30, 2))


let lista = {

    mediaIdade: function (array) {
        let filtroOpiniao = array.filter((pessoa) => { return pessoa.opiniao === 3 });
        let somaTotalIdade = filtroOpiniao.reduce((somaIdade, pessoa) => {
            return somaIdade + pessoa.idade
        }, 0);
        console.log(somaTotalIdade)
        let media = somaTotalIdade / filtroOpiniao.length;
        return 'A média de idade de quem achou ótimo é ' + media;

    },

    badReview: function (array) {
        const numRegular = array.filter((pessoa) => pessoa.opiniao === 1).length;

        return 'O número total de pessoas que acham o filme regular é:' + numRegular;
    },

    porcentagem: function (array) {
        let bom = array.filter(nota => nota.opiniao == 2).length;
        let bomPercentage = (bom / array.length) * 100 + '%';

        return 'A porcentagem de pessoas que acham o filme Bom é de ' + bomPercentage;
    },




}

console.log(lista.mediaIdade(espectadores));
console.log(lista.badReview(espectadores));
console.log(lista.porcentagem(espectadores));

console.log(espectadores);
