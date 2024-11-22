alert('Boas vindas ao jogo do número secreto.');

let rangeNumeros = prompt(`Range de números que deseja jogar:`);

let numeroSecreto = parseInt(Math.random() * rangeNumeros + 1);

let chute = 0;

let tentativas = 1;

console.log(`O número secreto é ${numeroSecreto}.`)

while(true){

    chute = prompt(`Escolha um número entre 1 e ${rangeNumeros}.`);

    if(numeroSecreto == chute){
        let palavraSingularPlural = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Acertou depois de ${tentativas} ${palavraSingularPlural}.`);
        break;
    }else {
        if(chute > numeroSecreto){
            alert('O número secreto é menor.');
        }else {
            alert('O número secreto é maior.');
        }
        tentativas++;
    }
}