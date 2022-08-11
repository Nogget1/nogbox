// console.log(Math.random())

function cumprimento() {
    console.log('Olá, seja bem vindo ao exercício de programação imperativa')
}

// cumprimento();

function cumprimentarA(nome) {
    const mensagem = "Olá, seja bem vindo! "
    console.log(mensagem + nome);
}

// cumprimentarA("William")
// cumprimentarA("Danilo")

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5
}
// console.log(multiplicarPorDoisESomarCinco(1))
// console.log(multiplicarPorDoisESomarCinco(5))
// const Erick = 5
// console.log(multiplicarPorDoisESomarCinco(Erick)) //agora sim

function PolegadasParaCentimetros(polegadas) {
    return polegadas * 2.54
}

// console.log(PolegadasParaCentimetros(1))

function EnderecoWeb(url) {
    return "https://" + url + ".com.br"
}

// console.log(EnderecoWeb("google"))

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

// console.log(calcularIMC(80, 1.80))

function IdadeCachorro(idade) {
    return idade * 7
}

// console.log(IdadeCachorro(9))


function ValorDaHoraMensal(valor) {
    return valor / 160
}

console.log("Voce ganha " + ValorDaHoraMensal(5000) + " por hora.")
let salario = "Voce ganha " + ValorDaHoraMensal(5000) + " por hora."

console.log(salario.toUpperCase())

function Circunferencia(raio) {
    return Math.PI * raio * raio
}

console.log(Circunferencia(2))




