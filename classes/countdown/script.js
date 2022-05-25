import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2022 23:59:59 GMT-0300')

console.log(tempoParaONatal.days)
console.log(tempoParaONatal.hours)
console.log(tempoParaONatal.minutes)
console.log(tempoParaONatal.seconds)
console.log(tempoParaONatal.total)

setInterval(()=>{
    console.log(tempoParaONatal.total)
},1000)