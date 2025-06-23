let i = 1;
let text = "";


function contar() {
    while (i < 10) {
        if (i % 2 == 0) {
            const gifs = [
            "cat-spinning.gif",
            "Moluscodancing.gif",
            "rat-dance.gif",
            "skeletondancing.gif",
            "shrek.gif"
            ];
            
            const gifIndex = i / 2; 
            const gifName = gifs[gifIndex % gifs.length];
            text += `<br><mark> the number is <b>${i}</mark></b><br><img src="GIFs/${gifName}" alt="GIF" width="200" height="200"><br>`;
        } else {
            text += `<br> the number is ${i}`;
        }
        i++;
        
    }
    document.getElementById("resultado").innerHTML = text;
}