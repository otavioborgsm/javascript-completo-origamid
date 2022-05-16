//const imgs = document.querySelectorAll('img')
//console.log(imgs)

//imgs.forEach(function(item, index, array){
    //console.log(item, index, array)
//})

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

console.log(titulos);
console.log(titulosArray)

titulosArray.forEach(function(item, index, array){
    //console.log(item, index, array)
})

const imgs = document.querySelectorAll('img')
console.log(imgs)

imgs.forEach((item, index, array) =>{
    //console.log(item, index, array)
})

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)

paragrafos.forEach((item)=>{
    console.log(item.innerText)
})