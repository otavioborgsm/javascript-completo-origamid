const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-lista')
console.log(h1.innerHTML)
console.log(h1.outerHTML)

h1.outerHTML = '<p>Novo Titulo</p>'

console.log(animaisLista.parentElement)
console.log(animaisLista.nextElementSibling)
console.log(animaisLista.previousElementSibling)
console.log(animaisLista.children)
console.log(animaisLista.querySelector('li:last-child'))
console.log(animaisLista.childNodes)
console.log(animaisLista.previousSibling)

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
const mapa = document.querySelector('.mapa')

//animais.appendChild(titulo)
contato.insertBefore(animais, mapa)

//contato.removeChild(titulo)
contato.replaceChild(mapa, titulo)

const novoH1 = document.createElement('h1')
novoH1.innerText = 'Novo Título'
novoH1.classList.add('titulo')
mapa.appendChild(novoH1)

console.log(novoH1)

const faq = document.querySelector('.faq')
const cloneH1 = h1.cloneNode(true)
faq.appendChild(cloneH1)


// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const menuClone = menu.cloneNode(true)
const copy = document.querySelector('.copy')

copy.appendChild(menuClone)

// Selecione o primeiro DT da dl de Faq
const primeiroDt = faq.querySelector('dt')
console.log(primeiroDt)

// Selecione o DD referente ao primeiro DT
const proximoDd = primeiroDt.nextElementSibling;
console.log(proximoDd)

// Substitua o conteúdo html de .faq pelo de .animais
faq.innerHTML = animais.innerHTML