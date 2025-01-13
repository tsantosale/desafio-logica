// Primeira parte do desafio 
// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

function calculoSaldoRankeadas(vitorias, derrotas){
    return vitorias - derrotas
   }

let saldoVitorias = calculoSaldoRankeadas(45, 30)

// Segunda parte do desafio
// Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

if (saldoVitorias >=10){
    console.log(`A Heroína tem saldo ${saldoVitorias} e está no nível ${nivel[0]}`)
}   else if((saldoVitorias >10) && (saldoVitorias <= 20)) {
    console.log(`A Heroína tem saldo ${saldoVitorias} e está no nível ${nivel[1]}`)
}

