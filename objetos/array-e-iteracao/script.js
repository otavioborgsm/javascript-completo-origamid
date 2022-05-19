const li = document.querySelectorAll('li')

li.forEach((item, i)=>{
  item.classList.add('ativa'+i)
})

const carros = ['Ford', 'Fiat', 'Honda']

const novaArray = carros.map((item, i, array)=>{
  console.log(item, i, array)
  return item.toUpperCase()
})

console.log(novaArray)

const numeros = [2, 4, 5, 6, 78]
const numerosX2 = numeros.map(n => n*2)
console.log(numerosX2)


const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min)
console.log(tempoAulas)

function nomeAulas(aula){
  return aula.nome
}

const arrayNomeAulas = aulas.map(nomeAulas)

const aulas2 = [10,25,30]
const reduceAulas = aulas2.reduce((acumulador, item) =>{
  console.log(acumulador, item)
  return acumulador+item
}, 0)
console.log(reduceAulas)

const listaDeNumeros = [60, 80, 90, 788, 4, 3, 117]

const maiorNumero = listaDeNumeros.reduce((anterior, atual)=>{
  return anterior > atual ? anterior : atual;
})

console.log(maiorNumero)

const listaAulas = aulas.reduce((acumulador, atual, index)=>{
  acumulador[index] = atual.nome;
  return acumulador;
}, {})

console.log(listaAulas)


function maiorQue100(numero) {
  return numero > 100;
}
const numeros2 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros2.some(maiorQue100); // true
console.log(temMaior)

const maiorQue3 = numeros2.every(x => x > 3);
console.log(maiorQue3)

const frutas = ['Banana', 'Pêra', 'Uva'];
const indexUva = frutas.findIndex(item => item==='Uva')
console.log(indexUva)

const temMaior45 = numeros2.find(x => x >45)
console.log(temMaior45)

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas1.filter((fruta) => {
  return fruta; 
});

console.log(arrayLimpa)


/*

----- ATIVIDADES -----

*/ 

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursosLista = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursosLista)

const objetosCurso = arrayCursos.map((curso)=>{
  const titulo = curso.querySelector('h1').innerText
  const descricao = curso.querySelector('p').innerText
  const aulas = curso.querySelector('.aulas').innerText
  const horas = curso.querySelector('.horas').innerText

  return{
    titulo,
    descricao,
    aulas,
    horas
  }
})

console.log('Cursos: ',objetosCurso)

// Retorne uma lista com os
// números maiores que 100
const numerosAtividade = [3, 44, 333, 23, 122, 322, 33];
const numerosMaioresQue100 = numerosAtividade.filter((x) => x > 100)
console.log(numerosMaioresQue100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
console.log(instrumentos.includes('Baixo'))

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let precos = compras.map((item)=> item.preco)
let totalCompras = 0

precos.forEach((item, i, array)=>{
  array[i] = +item.replace(',', '.').replace('R$', '')
  totalCompras += array[i]
})

console.log(precos)
console.log(totalCompras)