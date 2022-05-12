var possuiGraduacao = false;
var possuiDoutorado = false;

if (possuiGraduacao) {
    console.log('É verdadeiro');
    var x = 10;
} else if(possuiDoutorado){
    console.log('Possui Doutorado');
}else{
    console.log('Posuui nada!');
}

console.log(x);

var nome = 'Otávio';

if (nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

if (!possuiGraduacao) {
    console.log('Não possui graduação');
}

var x = 10
console.log(x !==11);


if ((5-5) && (5+5)){
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}

if ((5-10) && (5+5)) {
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}

var condicional = ( 5-5 ) || (5 + 5) || (10-2);
console.log(condicional);

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.')
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.')
        break;
    case 'Verde':
        console.log('Olhe para a floresta.')
        break;
    default:
        console.log('Feche os olhos.')
        break;
}