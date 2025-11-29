const precoCusto = Number(await pergunta("Preço de custo do produto: R$ "))
// Validação
if (isNaN(precoCusto) || precoCusto <= 0) {
    console.log("Valor inválido! Digite um número maior que zero.")
    process.exit();
}
// Regra de negócio
let margemLucro = precoCusto < 20 ? 0.45 : 0.30
// Cálculo
const valorVenda = precoCusto * (1 + margemLucro)
// Saída formatada
console.log(`Valor de Venda: R$ ${valorVenda.toFixed(2)}`)