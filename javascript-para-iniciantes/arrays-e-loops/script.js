var videoGames = ['Switch', 'PS4', 'XBOX']
videoGames.push('3DS')

console.log(videoGames)

for (var index = 0; index <10; index++){
    console.log(index)
}

console.log('while')
var i = 0
while (i <= 10) {
    console.log(i)
    i++
}

for( var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item])
    if (videoGames[item]==='PS4') {
        break;
    }
}

videoGames.forEach(function(jogo, posicao){
    console.log(jogo, posicao)
})
