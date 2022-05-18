/*const comida = 'Pizza'
const agua = new String('Água')

console.log(comida.length)
console.log(agua.length)

const frase = 'A melhor comida'
console.log(frase[frase.length-1])
console.log(frase.charAt(7))*/

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase.concat(linguagem)
console.log(fraseFinal)

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(fruta.includes(listaFrutas))
console.log(listaFrutas.includes(fruta, 5))
console.log(fruta.startsWith('Ba'))
console.log(fruta.endsWith('na'))

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(-5)) // Pega os 5 últimos
console.log(transacao2.slice(1, 3)) // Pega do 1 ao 3  
console.log(transacao3.slice(0, -3)) // do 0 até string.lenght-3
console.log(transacao1.slice(8)) //Remove os 8 primeiros caracteres da string 

console.log(fruta.indexOf('a'))
console.log(fruta.lastIndexOf('a'))
console.log(fruta.indexOf('na'))
console.log(fruta.lastIndexOf('na'))

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item)=>{
    console.log(item.padStart(20, '-'))
})

const frase2 = 'Ta'
console.log(frase2.repeat(5))

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ')
console.log(listaItens)

const arrayItens = listaItens.split(', ')
console.log(arrayItens)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div')
const novoHtml = htmlArray.join('section')
console.log(novoHtml)

console.log(fruta.toLowerCase())
console.log(fruta.toUpperCase())

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

let taxaTotal = 0
let recebimentoTotal = 0
transacoes.forEach((item)=>{
    const numeroLimpo = +item.valor.slice(3)
    if (item.descricao.slice(0,4)==='Taxa') {
        taxaTotal += numeroLimpo
    } else {
        recebimentoTotal += numeroLimpo
    }
})
console.log(taxaTotal)
console.log(recebimentoTotal)


  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const listaTransportes = transportes.split(';')
  console.log(listaTransportes)

  // Substitua todos os span's por a's
  let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
   html = html.split('span').join('a');
   console.log(html)
  // Retorne o último caracter da frase
  const frase3 = 'Melhor do ano!';
  console.log(frase3.charAt(frase3.length-1))
  
  // Retorne o total de taxas

  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let taxas = 0

transacoes2.forEach((item)=>{
    item = item.toLowerCase()
    if (item.includes('taxa')) {
        taxas++
    }
})
console.log(taxas)
  