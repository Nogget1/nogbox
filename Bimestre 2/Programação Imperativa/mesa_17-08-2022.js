//Exercício 1



// function podeSubir(altura, acompanhado) {

//     if (altura < 1.2)
//         return false;
//     else if (altura > 1.4 && altura < 2.0)
//         return true;
//     else if (altura < 1.4 && acompanhado)
//         return true;
//     else
//         return false;

// }

// console.log(podeSubir(1.3, false));

//Exercício 2

let altura = 1.3;
let acompanhado = false;

function podeSubir(altura, acompanhado) {

    if (altura < 1.2)
        return console.log("Acesso negado");
    else if (altura > 1.4 && altura < 2.0)
        return console.log("Acesso permitido");
    else if (altura < 1.4 && acompanhado)
        return console.log("Acesso permitido apenas com acompanhamento");
    else
        return console.log("Acesso negado");

}

podeSubir(altura, acompanhado);