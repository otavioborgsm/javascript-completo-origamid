function PessoaTeste(nome, idade){
    this.nome = nome
    this.idade = idade
}

PessoaTeste.prototype.andar = function(){
    return 'Pessoa andou'
}

PessoaTeste.prototype.nadar = function(){
    return 'Pessoa nadou'
}

const otavio = new PessoaTeste('Otávio', 20)

const listaAnimais = ['cachorro', 'gato', 'cavalo']

const lista = document.querySelectorAll('li')
const listaArray1 = Array.prototype.slice.call(lista)
const listaArray2 = Array.from(lista)

const Carro ={
    marca: 'Ford',
    preco: 2000,
    andar(){
        return true
    }
}

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

const pessoa = new Pessoa('Otávio', 'Borges', 20)
console.log(pessoa.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype)
console.log(HTMLCollection.prototype)
console.log(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name //String