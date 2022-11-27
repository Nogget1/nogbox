


// // maior e menor altura
// const maiorMenorAltura = (array) => {
//     let maior = {};
//     let menor = {};

//     array.forEach((pessoa) => {
//         if (!maior.altura || pessoa.altura > maior.altura) {
//             maior = pessoa;
//         }
//         if (!menor.altura || pessoa.altura < menor.altura) {
//             menor = pessoa;
//         }
//     });
//     console.log(`A maior pessoa do grupo tem ${maior.altura} e é do sexo ${maior.sexo == "M" ? "Masculino" : "Feminino"}`);
//     console.log(`A menor pessoa do grupo tem ${menor.altura} e é do sexo ${menor.sexo == "M" ? "Masculino" : "Feminino"}`)
// };

// maiorMenorAltura(pessoas);


// //média das altuas das mulheres

// const mediaAltura = (array) => {
//     let filtroMulher = array.filter((pessoa) => { return pessoa.sexo == "F" });
//     let somaTotalAltura = filtroMulher.reduce((somaAltura, pessoa) => {
//         return somaAltura + pessoa.altura
//     }, 0);

//     let media = somaTotalAltura / filtroMulher.length;

//     console.log(`A média de altura das mulheres é ${media.toFixed(2)}`);
// };
// mediaAltura(pessoas);


// //numero total de homens

// const qtdHomens = (array) => {
//     const numHomens = array.filter((pessoa) => pessoa.sexo == "M").length;
//     console.log(`O número total de homens é: ${numHomens}`)
// };
// qtdHomens(pessoas);


//Função modular
let Pessoas = require('./pessoas');
// console.log(Pessoas);

let lista = {
    maiorMenorAltura: function (array) {
        let menor = array[0].altura;
        let maior = array[0].altura;


        for (let i = 1; i < array.length; i++) {
            let altAux = array[i];

            if (altAux.altura < menor) {
                menor = altAux.altura;

            } else if (altAux.altura > maior) {
                maior = altAux.altura;

            }
        }
        return 'A maior altura é: ' + maior + ' e a menor altura é: ' + menor;
    },

    mediaAltura: function (array) {
        let media = 0;
        let qtaF = 0;
        let altSoma = 0;

        for (i = 0; i < array.length; i++) {
            let sexAux = array[i]

            if (sexAux.sexo === 'F') {
                qtaF++;
                altSoma = sexAux.altura + altSoma
            }

            media = altSoma / qtaF

        }
        return media;
    },
    qtdHomens: function (array) {
        let qtaM = 0;

        for (i = 0; i < array.length; i++) {
            let sexAux = array[i]

            if (sexAux.sexo === 'M') {
                qtaM++;
            }


        }
        return qtaM;
    }

};

console.log(lista.maiorMenorAltura(Pessoas));
console.log(lista.mediaAltura(Pessoas));
console.log(lista.qtdHomens(Pessoas));
