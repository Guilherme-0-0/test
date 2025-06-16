function numeros(){
    let num1 = Number(window.prompt("Digite o primeiro número:"));
    let num2 = Number(window.prompt("Digite o segundo número:"));
    let diferenca;
    
    if (num1 > num2){
        document.getElementById("frase1").innerHTML = "O primeiro número é maior que o segundo";
    }
    else if (num1 < num2){
        document.getElementById("frase1").innerHTML = "O segundo número é maior que o primeiro";
    }
    else {
        document.getElementById("frase1").innerHTML = "Os números são iguais";
    }

    if (diferenca = num1 - num2 || num2 - num1 > 10){
       document.getElementById("frase").innerHTML = "Se bater aquele desanimo, olhe para o orizonte e aviste os boletos do fim do mes"
    }

}