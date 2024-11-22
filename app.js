alert('Boas vindas ao jogo do número secreto.');

let numeroSecreto = 9;

let chute = prompt('Escolha um número entre 1 e 10.');

if(numeroSecreto == chute){
    alert('Acertou.')
}else {
    alert('Errou.')
}