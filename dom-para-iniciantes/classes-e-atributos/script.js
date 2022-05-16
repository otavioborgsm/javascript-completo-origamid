const menu = document.querySelector('.menu')
console.log(menu)

const itensMenu = document.querySelectorAll('.menu a')
console.log(itensMenu)

itensMenu.forEach((item)=>{
    item.classList.add('ativo')
})

itensMenu.forEach((item)=>{
    item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')

menu.classList.add('ativo')

if (menu.classList.contains('azul')){
    menu.classList.add('possui-azul')
}else{
    menu.classList.add('nao-possui-azul')
}

menu.className += ' azul'

const animais = document.querySelector('.animais')
console.log(animais.attributes)

const img = document.querySelector('img')
const srcImg = img.getAttribute('src')

img.setAttribute('alt', 'É uma raposa')
const possuiAlt = img.hasAttribute('alt')

console.log(srcImg)
console.log(possuiAlt)

const imgs = document.querySelectorAll('img')
imgs.forEach((item)=>{
    const possuiAtributo = item.hasAttribute('alt')
    console.log(possuiAtributo)
})


const linkExterno = document.querySelector('a[href^="http"]')
linkExterno.setAttribute('href', 'https://www.google.com')