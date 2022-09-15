let numeros = [1, 5, 9, 3, 5, 7, 4, 6, 2, 8];

let exercicio1 = (array) => {
    let soma = array.reduce((acumulador, num) => acumulador + num)
    let novaMatriz = array.map(item => item / soma)
    return novaMatriz;
}

console.log(exercicio1(numeros));