import soma from "./somador.js";
// import dividir from "./divisor";
// import multiplicar from "./multiplicador";
// import subtrair from "./subtrator";


console.log(soma(4, 2));
// var confirmacao = true;

// function EscolhaUsuarios() {
//     const valor1 = parseInt(prompt("Digite o primeiro número"));
//     const valor2 = parseInt(prompt("Digite o segundo número"));

//     const operacao = parseInt(
//         prompt(
//             "Digite qual operação gostaria de realizar. \n1 - Somar \n2 - Subtrair \n3 - Multiplicar \n4 - Dividir"
//         )
//     );

//     switch (operacao) {
//         case 1:
//             confirmacao = confirm(
//                 `Você tem certeza da seguinte operação ${valor1} + ${valor2}? `
//             );
//             if (confirmacao === false) {
//                 alert("Operação cancelada");
//                 EscolhaUsuarios();
//                 break;
//             }

//             alert(soma(valor1, valor2));

//             confirmacao = confirm("Deseja realizar mais alguma operação?");

//             if (confirmacao === true) {
//                 EscolhaUsuarios();
//             }
//             break;
//         case 2:
//             confirmacao = confirm(
//                 `Você tem certeza da seguinte operação ${valor1} - ${valor2}? `
//             );
//             if (confirmacao === false) {
//                 alert("Operação cancelada");
//                 EscolhaUsuarios();
//                 break;
//             }
//             alert(subtrair(valor1, valor2));

//             confirmacao = confirm("Deseja realizar mais alguma operação?");

//             if (confirmacao === true) {
//                 EscolhaUsuarios();
//             }
//             break;

//         case 3:
//             confirmacao = confirm(
//                 `Você tem certeza da seguinte operação ${valor1} * ${valor2}? `
//             );
//             if (confirmacao === false) {
//                 alert("Operação cancelada");
//                 EscolhaUsuarios();
//                 break;
//             }
//             alert(multiplicar(valor1, valor2));

//             confirmacao = confirm("Deseja realizar mais alguma operação?");

//             if (confirmacao === true) {
//                 EscolhaUsuarios();
//             }
//             break;

//         case 4:
//             confirmacao = confirm(
//                 `Você tem certeza da seguinte operação ${valor1} / ${valor2}? `
//             );
//             if (confirmacao === false) {
//                 alert("Operação cancelada");
//                 EscolhaUsuarios();
//                 break;
//             }
//             alert(dividir(valor1, valor2));

//             confirmacao = confirm("Deseja realizar mais alguma operação?");

//             if (confirmacao === true) {
//                 EscolhaUsuarios();
//             }
//             break;
//     };
// };


// EscolhaUsuarios();