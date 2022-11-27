//Minha Primeira Aplicação II
let pessoas = [
    {
        idade: 18,
        opiniao: 1,
    },
    {
        idade: 19,
        opiniao: 2,
    },
    {
        idade: 55,
        opiniao: 3,
    },
    {
        idade: 26,
        opiniao: 3,
    },
    {
        idade: 34,
        opiniao: 2,
    },
    {
        idade: 24,
        opiniao: 1,
    },
    {
        idade: 32,
        opiniao: 2,
    },
    {
        idade: 47,
        opiniao: 1,
    },
    {
        idade: 15,
        opiniao: 3,
    },
    {
        idade: 28,
        opiniao: 1,
    },
    {
        idade: 68,
        opiniao: 2,
    },
    {
        idade: 18,
        opiniao: 3,
    },
    {
        idade: 37,
        opiniao: 1,
    },
    {
        idade: 17,
        opiniao: 1,
    },
    {
        idade: 27,
        opiniao: 2,
    }
];


//Exercício 1

const mediaIdade = (array) => {
    let filtroOpiniao = array.filter((pessoa) => { return pessoa.opiniao === 3 });
    let somaTotalIdade = filtroOpiniao.reduce((somaIdade, pessoa) => {
        return somaIdade + pessoa.idade
    }, 0);
    console.log(somaTotalIdade)
    let media = somaTotalIdade / filtroOpiniao.length;

    console.log(`A média de idade de quem achou ótimo é ${media.toFixed(2)}`);
};
mediaIdade(pessoas);


//Exercício 2


const badReview = (array) => {
    const numRegular = array.filter((pessoa) => pessoa.opiniao === 1).length;
    console.log(`O número total de pessoas que acham o filme regular é: ${numRegular}`)
};
badReview(pessoas);

//Exercício 3

let bom = pessoas.filter(nota => nota.opiniao == 2).length;
let bomPercentage = (bom / pessoas.length) * 100 + '%';

console.log(`A porcentagem de pessoas que acham o filme Bom é ${bomPercentage}`);