// Exercício 1
// function loopDePares(num1) {
//     for (let i = 0; i <= 100; i++) {
//         console.log(i);
//         const soma = i + num1;

//         if (soma % 2 == 0) {
//             console.log(`O numero da ${soma} é par`);
//         }

//     }
// }

// loopDePares(2);

//Exercício 2

// function loopDePares(num1, palavra) {
//     for (let i = 0; i <= 100; i++) {
//         console.log(i);
//         const soma = i + num1;

//         if (soma % 2 != 0) {
//             console.log(palavra);
//         }

//     }
// }

// loopDePares(2, "ímpar");

//Exercício 3

// function soma(num) {
//     let numAnterior = 0;
//     for (i = 0; i <= num; i++) {
//         let soma = numAnterior + i;
//         numAnterior = soma;
//     }

//     console.log(`O resultado é ${numAnterior}`)
//     return;
// }

// console.log("Exercícion 3")
// soma(79);

//Exercício 4

// function newArray(num) {
//     let resultado = [];
//     for (i = 0; i <= num; i++) {
//         resultado.push(i);
//     }
//     console.log(resultado);
// }
// console.log("Exercício 4, o array definido é:")
// console.log(newArray(15));

//Exercício 5

// function split(palavra) {

//     var newPalavra = [];

//     for (i = 0; i < palavra.length; i++) {
//         newPalavra.push(palavra[i])
//     }
//     console.log(newPalavra)
// }

// console.log("Exercício 5")
// split('olá')

//Exercício 6


function moverZeros(array) {
    let arrayZero = [];
    let arrayCheios = [];

    for (i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            arrayZero.push(array[i])
        } else {
            arrayCheios.push(array[i])
        }
        console.log(arrayCheios + ',' + arrayZero)
    }
}

console.log('Exercício 6')
moverZeros([false, 1, 1, 2, 0, 1, 3, "a"]);





//Exercício 7
let array7a = [1, 2, 3];
let array7b = ['o', 'l', 'a'];
function arrayHandler(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
        console.log('eu sou ' + array1[i] + ' e eu sou ' + array2[i])
    }
};
//console.log(arrayHandler(array7a, array7b))

//Exercício 8
function arrayObjects(num) {
    let newArray = []
    for (var i = 1; i <= num; i++) {
        newArray.push({ valor: i })
    }
    return newArray;
}
//console.log(arrayObjects(5))

//Exercício 9

function arrayObjects2(num, str) {
    let newArray = [];
    for (var i = 1; i <= num; i++) {
        newArray.push({ [str]: i })
    }
    return newArray;
}
//console.log(arrayObjects2(5,'olá'))







