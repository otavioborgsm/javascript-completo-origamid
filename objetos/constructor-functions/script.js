function Carro(marca, precoInicial){
    const taxa = 1.2;
    const precoFinal = precoInicial*taxa
    this.marca = marca,
    this.preco = precoFinal
    console.log(this)
}

const honda = new Carro('Honda', 3000)
const fiat = new Carro('Fiat', 4000)

/* const Dom = {
    seletor: 'li',
    element(){
        return document.querySelector(this.seletor)
    },
    ativar(){
        this.element().classList.add('ativar')
    }
} */


// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
}

function Pessoa(nome, idade){
    this.nome = nome,
    this.idade = idade,
    this.andar = function(){
      console.log(this.nome + ' andou');
    }
    console.log(this)
}

const pessoaTeste = new Pessoa('Otávio', 20)
pessoaTeste.andar()
  
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const pessoa1 = new Pessoa('João', 20)
pessoa1.andar()

const pessoa2 = new Pessoa('Maria', 25)
pessoa2.andar()

const pessoa3 = new Pessoa('Bruno', 15)
pessoa3.andar()

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
  
function Dom(seletor) {
    const elementsList = document.querySelectorAll(seletor)
    this.elements = elementsList
    this.addClass = function(classe){
        elementsList.forEach((item)=>{
            item.classList.add(classe)
        })
    },
    this.removeClass = function(classe){
        elementsList.forEach((item)=>{
            item.classList.remove(classe)
        })
    }
}

const li = new Dom('li')
li.addClass('teste')
li.addClass('teste1')
li.removeClass('teste1')