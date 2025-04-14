// INSTRUÇÕES
// CRIAR 4 CAIXAS E ALINHÁ-LAS NA TELA E DEPOIS ALTERAR SUAS CORES

// Recupera o body

const body = document.querySelector('body')

// Criar a tag Main

const main = document.createElement('main')
main.className = 'main'
body.appendChild(main)

// Adicionar uma classe para o h1

const header = body.firstElementChild
header.className = 'header'

// ADD first section and one Box

section_Box = document.createElement('section')
section_Box.className = 'box-blue'
main.appendChild(section_Box)

// Create a p in the section one Box

const p = document.createElement('p')
p.id = 'paragraph-blue'
p.innerText = 'Conteúdo Azul'
section_Box.appendChild(p)

// Add second section and two Box

const section2_Box = document.createElement('section')
section2_Box.className = 'box-red'
main.appendChild(section2_Box)

// Create a p in the section box-red
const p_boxRed = document.createElement('p')
p_boxRed.id = 'paragraph-red'
p_boxRed.innerHTML = '<strong>Conteúdo vermelho</strong>'
section2_Box.appendChild(p_boxRed)

// Styling the box-red class
section2_Box.style.background = 'red'
section2_Box.style.width = '300px'
section2_Box.style.height = '150px'
section2_Box.style.margin = 'auto'

// Styling p
p_boxRed.style.color = 'white'


// Add third section and three Box

const section3_Box = document.createElement('section')
section3_Box.className = 'box-green'
main.appendChild(section3_Box)

// Create p for third section
const p_boxGreen = document.createElement('p')
p_boxGreen.id = 'paragraph-green'
p_boxGreen.innerText = 'Conteúdo Verde'
section3_Box.appendChild(p_boxGreen)

// Create p for four section
const section4_Box = document.createElement('section')
section4_Box.className = 'box-purple'
main.appendChild(section4_Box)

// Create p
const p_boxPurple = document.createElement('p')
p_boxPurple.id = 'paragraph-purple'
p_boxPurple.innerText = 'Conteúdo Roxo'
section4_Box.appendChild(p_boxPurple)

// Remove box-red
main.removeChild(section2_Box)