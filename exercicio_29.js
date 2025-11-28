import { input } from '@inquirer/prompts'//Importa a função "input" da biblioteca @inquirer/prompts
 // declara a variavel soma e contador
let soma = 0   //var para somar os números que forem múltiplos de 3
let contador = 0 //var que vai contar quantos números múltiplos de 3 foram digitados
// Loop infinito que só vai parar quando o usuário digitar 0
while (true) {
    // Pede um número ao usuário e converte o texto digitado para Number
    let resposta = Number(await input({
        message: 'Digite números inteiros (0 para sair):'
    }))

    // Se for 0, encerra o loop
    if (resposta === 0) break

  
    if (resposta % 3 === 0) { // Verifica se o número e múltiplo de 3, usa o operador % (resto da divisão) Se resposta % 3 === 0, então é múltiplo de 3
        soma += resposta// Adiciona o número à soma total
        contador++// Conta que mais um múltiplo foi digitado
    }
}

// Verifica se algum número válido foi digitado
if (contador === 0) {
    console.log('Nenhum múltiplo de 3 foi digitado.')// Se nenhum múltiplo foi digitado, informa ao usuário no terminal
} else {
    let media = soma / contador // Calcula a média dividindo a soma pelo total de números
    console.log(`Média dos múltiplos de 3: ${media}`) // Exibe o valor da média
}
