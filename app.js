let listaDeNumerosSorteados = [];
let numberLimit = 10;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
  
function exibirTextoNaTela(tag, texto) {
let linha = document.querySelector(tag);
linha.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.5});
}
function mensagemInicial() {
exibirTextoNaTela ('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Selecione um número entre 0 e 10');
  }
 reiniciarJogo();

  function verificarChute() {
 let chute = document.querySelector('input').value;
 if (chute == numeroSecreto) {
exibirTextoNaTela ('h1' , 'PARABÉNS!!');
let palavraTentativas = tentativas > 1 ? 'Tentativas' : 'Tentativa';
 let mensagemTentativas = (`Parabéns!  Você encontrou o número secreto com ${tentativas} ${palavraTentativas}`);
exibirTextoNaTela ('p' , mensagemTentativas )
document.getElementById('reiniciar').removeAttribute('disabled');
} else {
 if (chute > numeroSecreto) {
  exibirTextoNaTela ('p' , 'O número secreto é menor!');
 } else {
 exibirTextoNaTela ('p' , 'O número secreto é maior!');
}
tentativas++;
limparChute ();}
   }

 mensagemInicial('');
 function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numberLimit + 1);
  let numeroDeElementosOnList = listaDeNumerosSorteados.length;
  if (numeroDeElementosOnList == numberLimit) {
    listaDeNumerosSorteados =  [];
  } 
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
    
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}
 

 function limparChute() {
 chute = document.querySelector ('input');
chute.value = '' ;
    }

 function reiniciarJogo() {
 numeroSecreto = gerarNumeroAleatorio();
 limparChute ();
 tentativas = 1 ;
 mensagemInicial ();
 document.getElementById('reiniciar').setAttribute('disabled', true);

 }
