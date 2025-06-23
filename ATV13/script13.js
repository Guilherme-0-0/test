function tabuadas() {
    let num = Number(window.prompt("COLOQUE UM NÚMERO PARA VER A TABUADA (VALIDO, 1 para cima) :"));
    if (isNaN(num) || num < 0) {
        alert("COLOQUE UM NÚMERO VÁLIDO");
        return;}
let i = 1;  let text = "";
    while (i <= 10) {
        text += `${num} x ${i} = ${num * i}\n`;
    i++;}
    alert(text);}
