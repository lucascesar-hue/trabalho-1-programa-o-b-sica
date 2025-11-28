import { input, number } from '@inquirer/prompts'

// inicia variaveis que serao contadores
let menos21 = 0 // Contador para pessoas com menos de 21 anos
let mais50 = 0 // Contador para pessoas com mais de 50 anos
// Loop infinito para ler várias idades so vai parar quando digitar -99
while(true){

    let idade = await number({ message: 'digite a idade ou -99 para sair' }) // inicia a variavel idade e Solicita ao usuário que digite a idade 
    // Se o usuário digitar -99, encerra o loop
    if (idade === -99) {   
    break
  }
  // Verifica se a idade é menor que 21 e adiciona no contador
  if (idade < 21) {
    menos21++
  // Verifica se a idade é maior que 50 e adiciona no contador
  } else if (idade > 50) {
    mais50++
  }
}
// Exibe no terminal o total de pessoas com menos de 21 anos
console.log(`Total de pessoas com menos de 21 anos: ${menos21}`)
// Exibe o total de pessoas com mais de 50 anos
console.log(`Total de pessoas com mais de 50 anos: ${mais50}`)