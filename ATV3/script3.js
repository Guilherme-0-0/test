    function soma() {
        let num1 = Number(window.prompt('Digite o primeiro número:'));
        let num2 = Number(window.prompt('Digite o segundo número:'));
        let resultado = num1 + num2;
        alert(`A soma de ${num1} e ${num2} é ${resultado}.`);
        let resposta = resultado % 2;
        if (resposta == 0) {
            alert(`${resultado} é Par`);
        } else {
            alert(`${resultado} é Impar`);
        }
    }
    function subtracao() {
        let num1 = prompt('Digite o primeiro número:');
        let num2 = prompt('Digite o segundo número:');
        let resultado = parseInt(num1) - parseInt(num2);
        alert(`A subtração de ${num1} e ${num2} é ${resultado}.`);
        let resposta = resultado % 2;
        if (resposta == 0) {
            alert(`${resultado} é Par`);
        } else {
            alert(`${resultado} é Impar`);
        }
    }
    function multiplicacao() {
        let num1 = prompt('Digite o primeiro número:');
        let num2 = prompt('Digite o segundo número:');
        let resultado = parseInt(num1) * parseInt(num2);
        alert(`A multiplicação de ${num1} e ${num2} é ${resultado}.`);
        let resposta = resultado % 2;
        if (resposta == 0) {
            alert(`${resultado} é Par`);
        } else {
            alert(`${resultado} é Impar`);
        }
    }
    function divisao() {
        let num1 = prompt('Digite o primeiro número:');
        let num2 = prompt('Digite o segundo número:');
        let resultado = parseInt(num1) / parseInt(num2);
        alert(`A divisão de ${num1} e ${num2} é ${resultado}.`);
        let resposta = resultado % 2;
        if (resposta == 0) {
            alert(`${resultado} é Par`);
        } else {
            alert(`${resultado} é Impar`);
        }
    }