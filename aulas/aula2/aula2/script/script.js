// Criação de variáveis

let altura = prompt('Digite sua altura: ')
altura = Number(altura)

let peso = prompt('Digite seu peso: ')
peso = Number(peso)

// Criando uma função que recebe o número e cálcula o IMC

// IMC = PESO / ALtura * Altura

function Imc(weight, height) {
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return 'Por favor, insira valores válidos.';
    } else {
        if (weight / (height * height) < 18.5) {
            return 'Você está abaixo do peso.'
        } else if (weight / (height * height) >= 18.5 && weight / (height * height) < 24.9) {
             return 'Você está no peso normal.'
        } else if (weight / (height * height) >= 25 && weight / (height * height) < 29.9) {
            return 'Você está em sobrepeso.'
        } else if (weight / (height * height) >= 30 && weight / (height * height) < 35.9) {
            return 'Obesidade grau 1.'
        } else if (weight / (height * height) >= 36 && weight / (height * height) < 39.9) {
            return 'Obesidade grau 2.'
        } else {
            return 'Obesidade grau 3.'
        }
    }
}

// Executando

const message = Imc(peso, altura)
alert(message)

// SORRY O CÓDIGO NÃO ESTAR LIMPO