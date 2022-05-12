function areaQuadrado(lado) {
    return lado * lado
}
console.log(areaQuadrado(10))

function pi(){
    return 3.14
}

var total = 5 * pi()

console.log(total)

function imc(peso, altura) {
    var imc = peso / (altura*altura)
    return imc
}

console.log(imc(65, 1.70))

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Eu gosto do céu'
    } else if(cor === 'verde'){
        return 'Eu gosto de mato'
    }else{
        return'Eu não gosto de cores'
    }
}

console.log(corFavorita('azul'))

addEventListener('click', function(){
    console.log('clicou')
})

function terceiraIdade(idade) {
    if(typeof idade !== 'number'){
        return 'Por favor, preencha com um número'
    }else if (idade >=60) {
        return true        
    }else{
        return false
    }
}

console.log(terceiraIdade(70))

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193
    return `Falta visitar ${totalPaises - paisesVisitados} países`
}

console.log(faltaVisitar(5))


var profissao = 'Programador';

function dados() {
  var nome = 'Otávio';
  var idade = 19;
  function outrosDados() {
    var endereco = 'Três Cachoeiras';
    var idade = 20;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados())
