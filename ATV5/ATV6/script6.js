let Aleatorio = parseInt(Math.random() * 101);
let jogador = 0;
function pensar(){
    let jogador = Number(window.prompt("Digite um número entre 1 e 100"));
    if (jogador != Aleatorio) {
        document.querySelector('#pensar').textContent = "voce errou";
    }
    if (jogador > Aleatorio) {
        document.querySelector('#pensar').textContent = "voce chutou alto";
    }else {
        document.querySelector('#pensar').textContent = "voce chutou baixo";
    }
    if (jogador == Aleatorio) {
       document.querySelector('#pensar').textContent = `parabéns você acertou o número ${Aleatorio}`;
    }
 
}