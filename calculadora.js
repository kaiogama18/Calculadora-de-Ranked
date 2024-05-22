const prompt = require('prompt-sync')();
function Calculadora(quantidadeVitorias, quantidadeDerrotas) {
    let nivel;
    let saldoVitorias = quantidadeVitorias - quantidadeDerrotas;

    switch (true) {
        case (quantidadeVitorias < 10):
            nivel = 'Ferro';
            break;
        case (quantidadeVitorias >= 11 && quantidadeVitorias <= 20):
            nivel = 'Bronze';
            break;
        case (quantidadeVitorias >= 21 && quantidadeVitorias <= 50):
            nivel = 'Prata';
            break;
        case (quantidadeVitorias >= 51 && quantidadeVitorias <= 80):
            nivel = 'Ouro';
            break;
        case (quantidadeVitorias >= 81 && quantidadeVitorias <= 90):
            nivel = 'Diamante';
            break;
        case (quantidadeVitorias >= 91 && quantidadeVitorias <= 100):
            nivel = 'Lendário';
            break;
        case (quantidadeVitorias >= 101):
            nivel = 'Imortal';
            break;
        default:
            nivel = 'vitórias = 10';
            break;
    }
    return console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel);
}

let quantidadeVitorias = prompt("Informe a quantidade de vitórias: ");
let quantidadeDerrotas = prompt("Informe a quantidade de derrotas: ");
Calculadora(quantidadeVitorias, quantidadeDerrotas);