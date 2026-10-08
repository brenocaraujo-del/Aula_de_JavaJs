
// conteudos

// // if e else, else if, swith
// // looping
// // array (funções nativas)
// // objeto
// // funções
// // var, lrt e const
// // dicas: +=
// // concatenação
// // defer


// condicionais


// let nome = "Breno"
// let idade = 15
// let maiorDeidade = false
// let saldo = 10000
// if(idade >= 18){
//     // acontece algo 
//     console.log("Sou maior de idade");
// }
// else{
//     //acontece algo
//     console.log("Sou menor de idade");
// }


// // condicional composta


// if(saldo < 1000){
//     console.log("Fique em casa");
// }
// else if(saldo >= 1000 && saldo < 5000){
//     console.log("Sair pra festa");
// }
// else{
//     console.log("Guardar dinheiro");
// }

// Atividade 1 //

// let userAge =Number(prompt("Digite sua idade:"));
// if(userAge <= 0){
//     console.log("Numero invalido")
// }
// else if(userAge > 0 && userAge < 12){
//     console.log("você é uma criança")
// }
// else if(userAge > 12 && userAge < 18){
//     console.log("você é um adolecente")
// }
// else if(userAge > 18 && userAge < 60){
//     console.log("você é um adulto")
// }
// else if(userAge >= 60 ){
//     console.log("você é um idoso")
// }

// Atividade 2 //

// let peso =Number(prompt("Digite seu peso: "));
// let altura =Number(prompt("Digite sua altura: "));
// let imc = peso / (altura * altura);
// imc = imc.toFixed(2)
// alert (imc)

// if(imc <= 0){
//     alert("IMC invalido");
// }
// else if(imc < 18.5){
//     alert( imc + " Abaixo do peso normal");
// }
// else if(imc > 18.5 && imc < 24.9){
//     alert( imc + " Peso normal");
// }
// else if(imc > 25.0 && imc < 29.9){
//     alert( imc + " Acima do peso");
// }
// else if(imc > 30.0 && imc < 34.9){
//     alert( imc + " Obesidade classe 1");
// }
// else if(imc > 35.0 && imc < 39.9){
//     alert( imc + " Obesidade classe 2");
// }
// else if(imc >= 40.0 ){
//     alert( imc + " Obesidade classe 3");
// }

// Atividade 3 //

// let opcao =Number(prompt("Digite um numero de 1 a 7: "));
// switch (opcao) {
//     case 1:
//         alert("Domindo");
//         break
//     case 2:
//         alert("Segunda");
//         break
//     case 3:
//         alert("Terça");
//         break
//     case 4:
//         alert("Quarta");
//         break
//     case 5:
//         alert("Quinta");
//         break
//     case 6:
//         alert("Sexta");
//         break
//     case 7:
//         alert("Sabado");
//         break
// }

// atividade 4 //

let opcao1 =Number(prompt("Digite seu peso "));
let opcao2 =Number(prompt("Digite sua altura "));
let imc = opcao1 / (opcao2 * opcao2);
imc.toFixed(2)
switch (true) {

    case imc <18.5:
        alert("Abaixo do peso");
        break
    case imc > 18.5 && imc < 24.9:
        alert("Peso adequado");
        break
    case imc > 25.0 && imc < 29.9:
        alert("Acima do peso");
        break
    case imc > 30.0 && imc < 34.9:
        alert("Obesidade 1");
        break
    case imc > 35.0 && imc < 39.9:
        alert("Obesiddade 2");
        break
    case imc >= 40.0 :
        alert("Obesidade 3");
        break

    default:
        console.log("Ou você é muito fino ou muito largo")
}