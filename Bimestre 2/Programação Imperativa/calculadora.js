function adicionar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

console.log(adicionar(9, 12));
console.log(subtrair(9, 12));
console.log(multiplicar(9, 12));
console.log(dividir(9, 12));
console.log(dividir(9, 0));

function quadradoDoNumero(a) {
    return multiplicar(a, a);
}

console.log(quadradoDoNumero(9));

function mediaDeTresNumeros(a, b, c) {
    return dividir((adicionar(a, b) + c), 3);
}

console.log(mediaDeTresNumeros(2, 3, 5));

function calculaPorcentagem(a, b) {
    return dividir(multiplicar(a, b), 100);
}

console.log(calculaPorcentagem(10, 20));

function geradorDePorcentagens(a, b) {
    return multiplicar(dividir(a, b), 100)
}

console.log(geradorDePorcentagens(2, 200) + "%");
