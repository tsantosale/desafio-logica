// Primeira parte do desafio 
// Crie função com o parâmetro = quantidade de vitórias e derrotas de um jogador;
// retorne o resultado para uma variável, o saldo de Rankeadas = (vitórias - derrotas)

function calculoSaldoRankeadas(vitorias, derrotas){
    return vitorias - derrotas
   }

let saldoVitorias = calculoSaldoRankeadas(210, 30)

// Segunda parte do desafio
// Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

if (saldoVitorias <=10){
    console.log(`A Heroína tem saldo ${saldoVitorias} e está no nível ${nivel[0]}`)
}   else if((saldoVitorias >10) && (saldoVitorias <= 20)) {
    console.log(`A Heroína tem saldo ${saldoVitorias} e está no nível ${nivel[1]}`)
}   else if((saldoVitorias >20) && (saldoVitorias <= 50)) {
    console.log(`A Heroína tem saldo ${saldoVitorias} e está no nível ${nivel[2]}`)
}   else if((saldoVitorias >50) && (saldoVitorias <= 80)) {
    console.log(`A Heroína tem saldo ${saldoVitorias} e está no nível ${nivel[3]}`)
}   else if((saldoVitorias >80) && (saldoVitorias <= 90)) {
    console.log(`A Heroína tem saldo ${saldoVitorias} e está no nível ${nivel[4]}`)
}   else if((saldoVitorias >90) && (saldoVitorias <= 100)) {
    console.log(`A Heroína tem saldo ${saldoVitorias} e está no nível ${nivel[5]}`)
}   else if(saldoVitorias >100) {
    console.log(`A Heroína tem saldo ${saldoVitorias} e está no nível ${nivel[6]}`)
}

