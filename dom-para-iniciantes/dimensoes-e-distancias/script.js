const listaAnimais = document.querySelector('.animais-lista')
const height = listaAnimais.scrollHeight

const animaisTop = listaAnimais.offsetTop
console.log(animaisTop)

const primeiroH2 = document.querySelector('h2')
const h2Left = primeiroH2.offsetLeft

console.log(h2Left)

const rect = primeiroH2.getBoundingClientRect()

console.log(rect.top)

if (rect.top < 0) {
    console.log('passou do elemento')
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerHeight,
    window.outerWidth,
    window.pageYOffset,
)

const small = window.matchMedia('(max-width: 600px)').matches
if (small) {
    console.log('Usuário mobile')
}else{
    console.log('Usuário desktop')
}

const menuMobile = window.matchMedia('(max-width: 720px)').matches
const menu = document.querySelector('.menu')
if (menuMobile) {
    menu.className += ' menu-mobile'
    console.log(menu.classList)
}else{
    console.log('usuário desktop')
}

function somaImagens() {
    
    const imagens = document.querySelectorAll('img')
    let soma = 0

    imagens.forEach((item)=>{
        soma += item.offsetWidth
    })
    console.log(soma)
}

window.onload = function () {
    somaImagens();    
}

const linksPagina = document.querySelectorAll('a')

linksPagina.forEach((item)=>{
    if(item.offsetWidth >= 48 && item.offsetHeight >= 48){
        console.log(`Link ${item.innerHTML} aprovado`)
    }else{
        console.log(`Link ${item.innerHTML} não aprovado`)
    }
})