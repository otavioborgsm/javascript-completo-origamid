const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1] // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
console.log(carros);
console.log(carros.length);

const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)
console.log(li)
console.log(arrayLi)

const obj = {
  0: 'otavio',
  1: 'medeiros',
  2: 'borges',
  length: 3
}

const arrayObj = Array.from(obj)
console.log(obj)
console.log(arrayObj)

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas[2][1].length);

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos.sort())

const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift('Honda', 'Kia');
carros2.push('Jack', 'Jeep');
carros2.pop()
carros2.shift()
carros2.splice(3, 0, 'Mustang', 'Ferrari')

console.log(carros2.reverse())

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item5'].copyWithin(1, 0, 1));

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3))

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
console.log(transportes)
console.log(maisTransportes)

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5

const cloneLinguagens = linguagens.slice(2,4)
console.log(cloneLinguagens) 
//Para clonar arrays se usa slice

/*

----- ATIVIDADES -----

*/


const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeraComida = comidas.shift()
console.log(primeraComida)
// Remova o último valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop()
console.log(ultimaComida)
// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata')
console.log(comidas)


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()
console.log(estudantes)
// Inverta a ordem dos estudantes
estudantes.reverse()
console.log(estudantes)
// Verifique se Joana faz parte dos estudantes
if (estudantes.includes('Joana')) {
  console.log('Joana faz parte')
}else{
  console.log('Joana não faz parte')
}
// Verifique se Juliana faz parte dos estudantes
if (estudantes.includes('Juliana')) {
  console.log('Juliana faz parte')
}else{
  console.log('Juliana não faz parte')
}


// Substitua section por ul e div com li,
// utilizando split e join
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`

html = html.split('section').join('ul');
html = html.split('div').join('li');
console.log(html)

// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
const carrosOriginal = carros3.slice()
carros3.pop()
console.log(carros3)
console.log(carrosOriginal)