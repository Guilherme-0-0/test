let i = 10;
let text = "";

function contar() {
    while (i > 0) {
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
            text += `<br> the number is ${i}<br><img src="GIFs/${gifName}" alt="GIF" width="100" height="100"><br>`;
        } else {
            text += `<br><mark> the number is <b>${i}</b></mark>`;
        }
        i--; 
    }
    document.getElementById("resultado").innerHTML = text;
}
