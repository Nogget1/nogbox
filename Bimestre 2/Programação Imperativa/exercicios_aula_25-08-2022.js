let alicia = [32, 15, 20, 72, 91, 40, 28, 55, 64, 4, 25, 8, 26, 35, 93]
let bob = [17, 3, 9, 54, 99, 91, 60, 79, 42, 45, 66, 95, 15, 58, 4]

function encontrarGanhador(a, b) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;

    for (let auxiliar = 0; auxiliar < alicia.length; auxiliar++) {//percorre os arrays
        if (a[auxiliar] > b[auxiliar]) {//comparar cada posição percorrida => array1 == array2
            pontosPrimeiroParticipante = pontosPrimeiroParticipante + 1;
            console.log("PONTO PRA ALÍCIA!")
        } else if (a[auxiliar] < b[auxiliar]) {
            pontosSegundoParticipante = pontosSegundoParticipante + 1;
            console.log("PONTO PRO BOB!")
        } else {
            console.log("Empate");
        }

    }
    console.log(pontosPrimeiroParticipante);
    console.log(pontosSegundoParticipante);

    if (pontosPrimeiroParticipante > pontosSegundoParticipante) {
        return "Alícia";
    } else {
        return "Bob";
    }

}

console.log("O vencedor é: " + encontrarGanhador(alicia, bob))

