
// Anotações de aula


// console.log("Aula 2 testestesteste testestexte");

// // alert("Bem Vindos a aula 2");

// // confirm("string");


// // let escolhaDeUsuario = confirm("Deseja realmente sair?");
// // console.log(escolhaDeUsuario);

// // if(escolhaDeUsuario) {
// //     //caso verdadeiro
// //     alert("Saiu da sessão")
// // }else{
// //     //caso falso
// //     alert("A sessão continua")
// // };


// // prompt()

// let valorRecebido = prompt("Informe um número inteiro: ");
// console.log(valorRecebido);

// let valorA = 10;

// let valorConvertido = parseInt(valorRecebido);

// let resultado = valorA + valorConvertido;

// alert(resultado);

//Fim de anotações de aula;

alert("Bem vindo! Vamos jogar pedra, papel ou tesoura");

let inicioDeJogo = confirm("Vamos Começar?");
console.log("inicioDeJogo");

if (inicioDeJogo) {
    //caso verdadeiro
    alert("Bora lá!")
} else {
    //caso falso
    alert("Volte Sempre!")
};

function jogadaAleatoria(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

var pontosJogador = 0;
var pontosRobo = 0;

let resultadoGlobal = {
    "pedra": "tesoura",
    "papel": "pedra",
    "tesoura": "papel"
}


do {

    let jogadaJogador = prompt("Escolha pedra, papel ou tesoura: ");
    console.log(jogadaJogador);


    var jogadaRobo


    switch (jogadaAleatoria(1, 3)) {
        case 1:
            jogadaRobo = "pedra";
            break;

        case 2:
            jogadaRobo = "papel";
            break;

        case 3:
            jogadaRobo = "tesoura";
            break;
    }


    if (resultadoGlobal[jogadaJogador] === jogadaRobo) {
        pontosJogador++
        alert("Você ganhou " + pontosJogador + " - " + pontosRobo)
    } else if (resultadoGlobal[jogadaRobo] === jogadaJogador) {
        pontosRobo++
        alert("Eu ganhei " + pontosJogador + " - " + pontosRobo)
    } else alert("Empatamos " + pontosJogador + " - " + pontosRobo);

    console.log(pontosJogador + " - " + pontosRobo)
} while (pontosJogador !== 2 && pontosRobo !== 2);

alert("Jogo finalizado");

