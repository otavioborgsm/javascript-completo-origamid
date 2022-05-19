console.log(Number.isNaN('oi'))
console.log(Number.isInteger(10))

console.log(parseFloat('99.50'))
console.log(parseFloat('100.27 reais'))
console.log(parseInt('100.27 reais'))


const preco = 10.344
console.log(+preco.toFixed())
console.log(+preco.toFixed(2))
console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

console.log(Math.PI)

const aleatorio = Math.round(Math.random() *10)
console.log(aleatorio)
//Número random entre 72 e 32
const aleatorioIntervalo = Math.round(Math.random() * (72 - 32 + 1)) +32
console.log(aleatorioIntervalo)



// Retorne um número aleatório
// entre 1050 e 2000

const aleatorioIntervalo2 = Math.round(Math.random() * (2000 - 1050 + 1)) +1050
console.log(aleatorioIntervalo2)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const numerosArray = numeros.split(', ')
console.log(Math.max(...numerosArray))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
let listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limpaPrecos(preco){
  preco = parseFloat(preco.toUpperCase().replace(',' , '.').replace('R$' , ''));
  preco = +preco.toFixed(2)
  return preco
}

let total = 0;
listaPrecos.forEach((item)=>{
  total += limpaPrecos(item)
})

console.log(total)