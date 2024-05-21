var qg = prompt("digite a qtd de gols");
var qc = prompt("digite a qtd de passes certos");
var qe = prompt("digite a qtd de passes errados");

var pontos = (qg * 50) + (qe *10) +(qc * -5)

if (pontos < 50) {
      alert("pessima partida");
} else if (pontos >= 50 && pontos < 100) {      
    alert ("partida ruim");
} else if (pontos >= 100 && pontos < 150) { 
    alert ("fez o basico");
} else if (pontos >= 150 && pontos < 200) { 
    alert ("jogou bem");
} else {
    alert ("jogou demais");
}





















