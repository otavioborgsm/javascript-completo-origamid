// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)

const totalCaracteres = Array.prototype.reduce.call(paragrafos, ((acumulador, item)=>{
  return acumulador + item.innerText.length
}), 0)

console.log(totalCaracteres)
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criaHtml(tag, classe, conteudo){
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : ''
  conteudo ? elemento.innerHTML = conteudo : ''
  
  return elemento
}

console.log(criaHtml('h1', 'titulo', 'oi'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const tituloPronto = criaHtml.bind(null,'h1','titulo');

console.log(tituloPronto('oioi'))