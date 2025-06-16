let valor = -1;
    let quantidade = 0;
    function clicks(){
    valor++;
    document.getElementById("valor").innerHTML = valor;
    if (valor == 10){
        document.getElementById("valor").innerHTML = `(◕‿◕) `;
    }
}
    

function retornar(){
    valor = -1
    document.getElementById("valor").innerHTML ="click para iniciar";
}