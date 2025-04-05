// Modificando o background

const body = document.querySelector('body')
body.style.backgroundColor = 'aquamarine'

// Variáveis

let contador = 0;

const contadorDisplay = document.querySelector('#contador')
const diminuirBotao = document.querySelector('#diminuir')
const acrescentarBotao = document.querySelector('#acrescentar')

// Funções

function atualizarContador() {
    contadorDisplay.textContent = contador
}

diminuirBotao.addEventListener('click', function() {
    contador--;
    atualizarContador();
});

acrescentarBotao.addEventListener('click', function() {
    contador++;
    atualizarContador();
});