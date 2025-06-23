function tabuadas() {
    let num = Number(window.prompt("Enter a number to generate its multiplication table:"));
    if (isNaN(num) || num < 0) {
        alert("COLOQUE UM NÚMERO VÁLIDO");
        return;
    }
    let i = 1;
    let text = "";
    while (i <= 10) {
        text += `${num} x ${i} = ${num * i}\n`;
        i++;
    }
    alert(text);
}