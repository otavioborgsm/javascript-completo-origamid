// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const body = document.querySelector('body')

for (let i = 0; i < 1000; i++) {
  setTimeout(()=>{
    body.classList.toggle('vermelho')
  },2000 * i)
  
}
// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0
let timer;

function iniciarTempo(){
  timer = setInterval(()=>{
    tempo.innerText = i++
  },100)
  iniciar.setAttribute('disabled', '')
}

function pausarTempo(){
  clearInterval(timer)
  iniciar.removeAttribute('disabled')
}

function resetarTempo(){
  tempo.innerText = 0
  i = 0
}