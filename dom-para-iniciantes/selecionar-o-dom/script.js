const animais = document.getElementById('animais')
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection[1])

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linkInternos = document.querySelector('[href^="#"]')
console.log(linkInternos)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')
primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML)
console.log(gridSectionNode)

gridSectionNode.forEach(function(item, index){
    console.log(item)
})

const arrayGrid= Array.from(gridSectionHTML)
arrayGrid.forEach(function(item){
    console.log(item)
})

const todasAsFoto = document.querySelectorAll('img')
console.log(todasAsFoto)

const animaisDescricaoH2 = document.querySelector('.animais-descricao h2')
console.log(animaisDescricaoH2)

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagensAnimais)

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length-1])