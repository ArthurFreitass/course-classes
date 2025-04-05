// Revisão em JS

// Arrows
const Sum = (number1, number2) => number1 + number2

// Criando uma mais comum

function PairODD(number) {
    let message = 'Par'
    if (number % 2 == 0) {

    } else {
        message = 'Ímpar'
    }
    return message
}

console.log(PairODD(3));

// Usando Objetos q possuem um Array de Objetos

const Pessoa = {
    Nome: 'Beto',
    Idade: '17',
    Caracteristicas: [
        {Ânimo: 'Patético'},
        {Habitos: 'Pupunha'},
        {Shape: 'Patético'},
        {Futuro: 'Tenebroso'},
    ]
}

const PessoaDois = {
    Nome: 'Alfredo',
    Idade: '17',
    Caracteristicas: [
        {Ânimo: 'Impáravel'},
        {Habitos: 'Leitura'},
        {Shape: 'Evoluindo'},
        {Futuro: 'Promissor'},
    ]
}

function Message() {
    return (`O futuro do beto é: ${Pessoa.Caracteristicas[3].Futuro}, já o do sigma Alfredo: ${PessoaDois.Caracteristicas[3].Futuro}`)
}

console.log(Message());


// Apenas teoria

class ReceiveData {
    // Recebe os dados do pedido
}

class SaveDatabase {
    // Salva as informações do pedido no banco de dados
}

// 6

class CalcularDesconto {
    calcular(valor) {
        // Metodo

    }
}

class DescontoCLiente(valor) {
    // Calculo do Desconto do cliente

}

class DescontoParceiro(valor) {
    // Cálculo do desconto parceiro

}

// Arrumando o código

class Ave {
    Comer() {
        console.log('Estou comendo');
    }
}

class AveQueVoa extends Ave {
    Voar() {
        console.log('Voando');
    }
}

class Pinguim extends Ave {
    Nadar() {
        console.log('Estou nadando');
    }
}