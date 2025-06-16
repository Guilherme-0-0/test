   let valor = 0;
   let quantidade = 0;

function Inscricao(){
  valor++;
  document.getElementById("valor").innerHTML = valor;
  if (valor == 12){
    document.getElementById("valor").innerHTML = `tem ${valor} inscritos já é possivel formar o minimo de grupos`;
  
  }
  else if (valor < 12){
    document.getElementById("valor").innerHTML = `tem ${valor} inscritos, ainda não é possivel formar o minimo de grupos`;
  } 
  if (valor % 3 == 0 && valor > 0){
    quantidade++;
    document.getElementById("quantidade").innerHTML = `tem ${quantidade} grupos formados`;
  }
  

}