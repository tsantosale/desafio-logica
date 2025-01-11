// Primeira parte do desafio 
// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

function calculoSaldoRankeadas(vitorias, derrotas){
    return vitorias - derrotas
   }

let saldoVitorias = calculoSaldoRankeadas(45, 30)

console.log ("O saldo de vitória é " + saldoVitorias) 
