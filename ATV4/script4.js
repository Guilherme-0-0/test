function botao() {
    let pergunte = Number(window.prompt());
    let resposta = pergunte % 2
    
    if (resposta == 0){
        alert("Par")
    } else {
        alert("Impar")
    }
}