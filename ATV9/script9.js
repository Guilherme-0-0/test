function estacao() {
    let valor = window.prompt("Digite o nome de um mês do ano:").toLowerCase();
    let resultado;
    switch (valor) {
        case "dezembro":
        case "janeiro":
        case "fevereiro":
            resultado = "É verão";
            break;
        case "março":
        case "abril":
        case "maio":
            resultado = "É outono";
            break;
        case "junho":
        case "julho":
        case "agosto":
            resultado = "É inverno";
            break;
        case "setembro":
        case "outubro":
        case "novembro":
            resultado = "É primavera";
            break;
        default:
            resultado = "Mês inválido";
    }
    document.getElementById("resultado").innerHTML = resultado;

    if (valor === "dezembro" || valor === "janeiro" || valor === "fevereiro") {
        document.body.style.backgroundColor = "red";
    }
    else if (valor === "março" || valor === "abril" || valor === "maio") {
        document.body.style.backgroundColor = "orange";
    } 
    else if (valor === "junho" || valor === "julho" || valor === "agosto") {
        document.body.style.backgroundColor = "blue";
    } 
    else if (valor === "setembro" || valor === "outubro" || valor === "novembro") {
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "white";
    }
}