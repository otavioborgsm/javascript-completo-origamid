// Crie uma função que verifique
// corretamente o tipo de dado

function verificaTipo(dado){
  return Object.prototype.toString.call(dado)
}

console.log(verificaTipo(1))
console.log(verificaTipo({}))
console.log(verificaTipo('Otávio'))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}
Object.defineProperties(quadrado, {
  lados:{
    value: 4,
    enumerable: true
  },
})

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  //width: 800,
  //height: 600,
  //background: '#333'
}

Object.defineProperties(configuracao,{
  width:{
    value: 800,
    configurable: false
  },
  height:{
    value: 600,
    configurable: false
  },
  background:{
    value: '#333',
    configurable: false
  },
})

Object.freeze(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));