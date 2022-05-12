var pessoa = {
    nome : 'Otávio',
    idade: 20,
}
console.log(pessoa)

var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado
    },
    perimetro(lado) {
        return this.lados * lado
    },
}

console.log(quadrado, quadrado.area(5), quadrado.perimetro(5))

var eu ={
    nome: 'Otávio',
    sobrenome: 'Borges',
    idade: 20,
    nomeCompleto(nome, sobrenome){
        return nome +' '+ sobrenome
    }
}
console.log(eu.nomeCompleto(eu.nome, eu.sobrenome))


var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
carro.preco = 3000
console.log(carro)

var cachorro={
    raca: 'labrador',
    cor: 'preto',
    idade: 10, 
    latir(pessoa){
        if (pessoa === 'homem') {
            return true
        } else {
            return false
        }
    }
}
console.log(cachorro.latir('homem'))