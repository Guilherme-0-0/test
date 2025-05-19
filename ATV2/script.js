onclick = function (){
    let anoNascimento = prompt('Digite o seu ano de nascimento:');
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;

    if (idade >= 18) {
        alert('Você é maior de idade e pode tirar a carteira de motorista!');
    } else {
        let anosRestantes = 18 - idade;
        alert(`Você ainda é menor de idade. Faltam ${anosRestantes} anos para você poder tirar a carteira de motorista.`);
    }
};