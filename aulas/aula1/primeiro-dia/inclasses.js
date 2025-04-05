// Fazendo em uma classe o código da primeira aula

class EventCount {
    constructor() {
        this.count = 0;
    }

    // Responsabilida única da classe

    // Nome da função deve ser igual ao da função no botão do HTML

    // Responsabilidade única nos métodos

    addPerson() {
        this.count += 1
    }

    rmvPerson() {
        if (this.count > 0) {
            this.count -= 1
        }
    }

    getCount() {
        return this.count
    }
}

// Fazendo o contador funcionar

const eventCount = new EventCount()

// Atualizando o contador na página

function updateDisplay() {
    const countElement = document.querySelector("#nomedocontador")
    countElement.innerText = eventCount.getCount()
}

function addPerson() {
    eventCount.addPerson()
    updateDisplay()
    eventCount.rmvPerson()
}