let nomeHeroi = "Gretta"
let XPHeroi = 5000
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if(XPHeroi <1000){
  console.log("A heroína é " + nomeHeroi + " do nível " + + nivel[0]);
} else if ((XPHeroi >1000) && (XPHeroi <=2000)) {
  console.log ("A heroína é " + nomeHeroi + " do nível " + nivel[1]);
} else if ((XPHeroi >2000) && (XPHeroi <=5000)) {
  console.log ("A heroína é " + nomeHeroi + " do nível " + nivel[2]);
} else if ((XPHeroi >5000) && (XPHeroi <=7000)) {
  console.log ("A heroína é " + nomeHeroi + " do nível " + nivel[3]);
} else if ((XPHeroi >7000) && (XPHeroi <=8000)) {
  console.log ("A heroína é " + nomeHeroi + " do nível " + nivel[4]);
} else if ((XPHeroi >8000) && (XPHeroi <=9000)) {
  console.log ("A heroína é " + nomeHeroi + " do nível " + nivel[5]);
} else if ((XPHeroi >9000) && (XPHeroi <=10000)) {
  console.log ("A heroína é " + nomeHeroi + " do nível " + nivel[6]);
} else if (XPHeroi >10000) {
  console.log ("A heroína é " + nomeHeroi + " do nível " + + nivel[7]);
}