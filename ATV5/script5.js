function mediaN(){
let num1 = Number(window.prompt("Escreva sua nota do primeiro Tri: "));
let num2 = Number(window.prompt("Escreva sua nota do segundo Tri: "));
let num3 = Number(window.prompt("Escreva sua nota no terceiro Tri: "))
let media = (num1 + num2 + num3) / 3;
let incompetencia = 6 - media;
if (media >= 6.0) {
    document.querySelector('#Nmedia').textContent = `sua media é ${media} e você foi aprovado`;
}
else {
    document.querySelector('#Nmedia').textContent = `sua media é ${media} e você foi reprovado sua incopetência foi de ${incompetencia} pontos`;

}
}
