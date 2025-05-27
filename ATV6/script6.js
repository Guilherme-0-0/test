let Aleatorio = parseInt(Math.random() * 101);
let tentativas = 0;
let jogados = [];

function pensar() {
    let jogador = Number(window.prompt("Digite um número entre 1 e 100"));

    if (jogador !== Aleatorio) {
        if (jogador > Aleatorio) {
            document.querySelector('#pensar').textContent = "Você chutou alto";
        } else {
            document.querySelector('#pensar').textContent = "Você chutou baixo";
        }
    } else {
        document.querySelector('#pensar').textContent = `Parabéns! Você acertou o número ${Aleatorio}! O jogo será reiniciado.`;

       
        setTimeout(() => {
            Aleatorio = parseInt(Math.random() * 101);
            tentativas = 0;
            jogados = [];
            document.querySelector('#pensar').textContent = "Novo jogo iniciado! Tente adivinhar.";
            document.querySelector('#tentativas').textContent = "Tentativas: 0";
            document.querySelector('#jogadas').textContent = "Jogadas:";
        }, 2000);

        return; 
    }

    tentativas++;
    document.querySelector('#tentativas').textContent = `Tentativas: ${tentativas}`;
    jogados.push(jogador);
    document.querySelector('#jogadas').textContent = `Jogadas: ${jogados.join(', ')}`;
}
